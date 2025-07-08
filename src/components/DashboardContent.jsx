import React, { useState, useEffect } from "react";
import { useAuth } from "../context/ContextProvider";
import axios from "axios";
import { toast } from "react-toastify";
import WorkoutModal from "./workoutmodal";
import Membership from "./Membership";

const plans = [
  {
    name: "Basic Plan",
    benefits: [
      "Access to gym during off-peak hours",
      "Use of cardio and weight machines",
      "Locker room access",
      "One complimentary fitness assessment",
      "Community group support (WhatsApp or Facebook)",
    ],
  },
  {
    name: "Standard Plan",
    benefits: [
      "Unlimited gym access (morning to evening)",
      "Access to all workout zones (cardio, strength, HIIT)",
      "Monthly progress tracking with trainer",
      "Personalized beginner workout plan",
      "Discounts on gym merchandise (up to 10%)",
    ],
  },
  {
    name: "Premium Plan",
    benefits: [
      "Everything in Standard Plan",
      "One-on-one personal training session per week",
      "Customized meal/diet plan by nutritionist",
      "Access to all group classes (Zumba, Yoga, CrossFit)",
      "Monthly body analysis + goal setting",
      "Free guest pass for a friend (once a month)",
    ],
  },
  {
    name: "Elite Plan",
    benefits: [
      "All Premium benefits",
      "Dedicated personal trainer (3x/week)",
      "Priority booking for classes & equipment",
      "Free branded gym kit (bottle, towel, t-shirt)",
      "Weekly diet consultation & body scans",
    ],
  },
];

export default function DashboardContent() {
  const [showModal, setShowModal] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [showBmiCalculator, setShowBmiCalculator] = useState(false);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [userData, setUserData] = useState({});
  const [plan, setPlan] = useState('');
  const { user } = useAuth();

  const userId = localStorage.getItem("userId");

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_API_BASE_URL}user/${user._id}`
  //       );
  //       setUserPlan(response.data.plan);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, [userPlan]);



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}user/${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    // if (userId) {
    fetchUserData();
    // }
  }, [userId, plan]);

  const calculateBMI = () => {
    if (!height || !weight) return toast.error("Enter height and Weight")
    const h = height / 100;
    const bmiValue = (weight / (h * h)).toFixed(1);
    setBmi(bmiValue);
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
    setHeight('')
    setWeight('')
  };

  const handleMembershipSelect = async (plan) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}updateMembership`,
        {
          userId,
          email: user.email,
          plan: plan,
        }
      );

    } catch (error) {
      console.error("Error updating membership:", error);
    }
  };

  // MEMBERSHIP 
  const getFormattedJoinDates = (joinedDate) => {
    const joinDateObj = new Date(joinedDate);

    // Format joined date
    const formattedJoinDate = joinDateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Calculate next month date
    const nextMonthDateObj = new Date(joinDateObj);
    nextMonthDateObj.setMonth(joinDateObj.getMonth() + 1);

    const formattedNextMonthDate = nextMonthDateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return {
      formattedJoinDate,
      formattedNextMonthDate,
    };
  };
  const { formattedJoinDate, formattedNextMonthDate } = getFormattedJoinDates(userData?.joined);

  const scrollToElementById = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // QUICK ACTION 
  const actions = [
    {
      label: "Manage Membership",
      onClick: () => scrollToElementById('membership-container'),
    },
    {
      label: "BMI Calculator",
      onClick: () => setShowBmiCalculator(true),
    },
    {
      label: "Set New Goal",
      onClick: () => console.log("New goal set"),
    },
    {
      label: "Quick Workout",
      onClick: () => setShowModal(true),
    },
  ];

  // WORKOUTS
  const savedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];

  // MAIN DASHBORAD
  const totalWorkoutHours = () => {
    const total = savedWorkouts.reduce((acc, workout) => acc + (workout.totalHours || 0), 0);
    return total.toFixed(2); // e.g., "3.75"
  };


  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6 mt-10 md:mt-15 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome back, {!user ? "username" : user.name + "!"} 💪
              </h1>
              <p className="text-sm text-gray-500">
                Track your fitness journey and stay motivated
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Workouts This Week", value: savedWorkouts?.length },
                { label: "Total Workout Duration (hours)", value: totalWorkoutHours() },
                { label: "Height", value: (height || '--') },
                { label: "Weight", value: (weight || '--') },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg text-center"
                >
                  <p className="text-2xl font-semibold text-indigo-600">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>

            {/* BMI Calculator */}
            {
              showBmiCalculator && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    Calculate Your BMI
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="number"
                      placeholder="Height (cm)"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="number"
                      placeholder="Weight (kg)"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="border p-2 rounded w-full"
                    />
                    <button
                      onClick={calculateBMI}
                      className="bg-[#a9d608] hover:bg-[#7e8b4eec] text-white p-2 rounded"
                    >
                      Calculate
                    </button>
                  </div>
                  {bmi && (
                    <div className="mt-4">
                      <p className="text-lg text-gray-700">
                        Your BMI: <strong>{bmi}</strong> ({category})
                      </p>
                    </div>
                  )}
                </div>
              )
            }

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Recent Activity
              </h2>
              {savedWorkouts.length < 1 ? (
                <p className="text-gray-800 font-medium">No Recent Workouts</p>
              ) : (
                savedWorkouts.map((workout, i) => (
                  <div key={i} className="py-2 border-b last:border-b-0">
                    <p className="text-gray-800 font-medium">{workout.type}</p>
                    <p className="text-sm text-gray-500">
                      {`${workout.time.hours > 0 ? workout.time.hours + 'h ' : ''}${workout.time.minutes > 0 ? workout.time.minutes + 'm ' : ''
                        }${workout.time.seconds > 0 ? workout.time.seconds + 's' : ''}`}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Side - Membership & Actions */}
          {/* <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Premium Membership</h3>
            <p className="text-sm">Member since <strong>January 2024</strong></p>
            <p className="text-sm mb-3">Next billing: <strong>October 10, 2025</strong></p>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>24/7 gym access</li>
              <li>Personal trainer sessions</li>
              <li>Group classes</li>
              <li>Nutrition consultation</li>
            </ul>
            <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded font-semibold hover:bg-orange-100 transition">
              Manage Membership
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Book a Session', 'Join Class', 'Set New Goal', 'Quick Workout'].map((action, idx) => (
                <button
                  key={idx}
                  className="bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-[#a9d608] transition text-sm font-medium"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div> */}
          <WorkoutModal setShowModal={setShowModal} showModal={showModal} />

          {/* Right Side - Membership & Actions */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{userData.plan}</h3>
              <p className="text-sm">
                Member since <strong>{formattedJoinDate}</strong>
              </p>
              <p className="text-sm mb-3">
                Next billing: <strong>{formattedNextMonthDate}</strong>
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                {plans
                  .find((plan) => plan.name === userData?.plan)
                  ?.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
              </ul>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Select a Membership Plan</h3>
            <div className="grid grid-cols-1 gap-4">
              {plans.map((plan, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer" onClick={() => handleMembershipSelect(plan.name)}>
                  <h4 className="text-lg font-semibold">{plan.name}</h4>
                  <p className="text-sm text-gray-600">Click to view details</p>
                </div>
              ))}
            </div>
          </div> */}

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {actions.map((action, idx) => (
                  <button
                    onClick={action.onClick}
                    key={idx}
                    className="bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-[#a9d608] transition text-sm font-medium"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Membership setPlan={setPlan} userData={userData} />
    </>
  );
}
