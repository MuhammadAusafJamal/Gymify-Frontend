import React from 'react';
import axios from 'axios';
import { useAuth } from '../context/ContextProvider';
import { toast } from "react-toastify";

const plans = [
  {
    name: 'Basic Plan',
    benefits: [
      'Access to gym during off-peak hours',
      'Use of cardio and weight machines',
      'Locker room access',
      'One complimentary fitness assessment',
      'Community group support (WhatsApp or Facebook)'
    ]
  },
  {
    name: 'Standard Plan',
    benefits: [
      'Unlimited gym access (morning to evening)',
      'Access to all workout zones (cardio, strength, HIIT)',
      'Monthly progress tracking with trainer',
      'Personalized beginner workout plan',
      'Discounts on gym merchandise (up to 10%)'
    ]
  },
  {
    name: 'Premium Plan',
    benefits: [
      'Everything in Standard Plan',
      'One-on-one personal training session per week',
      'Customized meal/diet plan by nutritionist',
      'Access to all group classes (Zumba, Yoga, CrossFit)',
      'Monthly body analysis + goal setting',
      'Free guest pass for a friend (once a month)'
    ]
  },
  {
    name: 'Elite Plan',
    benefits: [
      'All Premium benefits',
      'Dedicated personal trainer (3x/week)',
      'Priority booking for classes & equipment',
      'Free branded gym kit (bottle, towel, t-shirt)',
      'Weekly diet consultation & body scans'
    ]
  }
];

export default function Membership({ setPlan, userData = {} }) {
  const { user } = useAuth();

  const handleMembershipSelect = async (planName) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}updateMembership`, {
        email: user.email,
        plan: planName,
      });

      if (response.status === 200) {
        toast.success(`Membership updated to ${planName}`);
        setPlan(planName);
      } else {
        throw new Error('Failed to update membership');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error updating membership. Please try again.');
    }
  };

  return (
    <div id='membership-container' className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, index) => {
          const isCurrentPlan = userData?.plan === plan.name;

          return (
            <div
              key={index}
              className={`border rounded-lg p-4 transition ${isCurrentPlan
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-70'
                  : 'hover:shadow-lg text-white bg-[#88aa0b]'
                }`}
            >
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <ul className="mt-2">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm">
                    - {benefit}
                  </li>
                ))}
              </ul>

              {isCurrentPlan ? (
                <button
                  disabled
                  className="mt-4 bg-gray-400 text-white font-bold px-4 py-2 rounded cursor-not-allowed w-full"
                >
                  Selected
                </button>
              ) : (
                <button
                  onClick={() => handleMembershipSelect(plan.name)}
                  className="mt-4 bg-white text-[#a9d608] font-bold px-4 py-2 rounded hover:bg-[#f0f6d9] transition w-full"
                >
                  Select Plan
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
