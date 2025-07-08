import React from 'react'
import { Link } from "react-router-dom";
import Header from './Header';

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$38",
    highlight: null,
    highlightColor: null,
    features: [
      "Access to gym during off-peak hours",
      "Use of cardio and weight machines",
      "Locker room access",
      "One complimentary fitness assessment",
      "Community group support (WhatsApp or Facebook)",
    ],
  },
  {
    title: "Standard Plan",
    price: "$56",
    highlight: "POPULAR",
    highlightColor: "#a9d608",
    features: [
      "Unlimited gym access (morning to evening)",
      "Access to all workout zones (cardio, strength, HIIT)",
      "Monthly progress tracking with trainer",
      "Personalized beginner workout plan",
      "Discounts on gym merchandise (up to 10%)",
    ],
  },
  {
    title: "Premium Plan",
    price: "$70",
    highlight: null,
    highlightColor: null,
    features: [
      "Everything in Standard Plan",
      "One-on-one personal training session per week",
      "Customized meal/diet plan by nutritionist",
      "Access to all group classes (Zumba, Yoga, CrossFit)",
      "Monthly body analysis + goal setting",
      "Free guest pass for a friend (once a month)",
    ],
  },
  {
    title: "Elite Plan",
    price: "$100",
    highlight: null,
    highlightColor: null,
    features: [
      "All Premium benefits",
      "Dedicated personal trainer (3x/week)",
      "Priority booking for classes & equipment",
      "Free branded gym kit (bottle, towel, t-shirt)",
      "Weekly diet consultation & body scans",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden" id="pricing">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              PERFECT PLAN FOR YOUR FITNESS GOALS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Choose The Perfect Plan To Match Your Fitness Goals And Start Your Journey Today
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div
                  className={`h-full p-6 rounded-lg border-2 ${plan.highlightColor ? `border-[${plan.highlightColor}]` : "border-gray-300"
                    } flex flex-col relative overflow-hidden`}
                >
                  {plan.highlight && (
                    <span
                      className="px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl text-white"
                      style={{ backgroundColor: plan.highlightColor }}
                    >
                      {plan.highlight}
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {plan.title}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{plan.price}</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <div>
                    {plan.features.map((feature, fIdx) => (
                      <p key={fIdx} className="flex items-center text-gray-600 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        {feature}
                      </p>
                    ))}
                  </div>
                  <Link to="/signup">
                    <button
                      className={`flex hover:cursor-pointer items-center justify-center mt-auto text-white ${plan.highlightColor ? `bg-[${plan.highlightColor}] hover:bg-[#818e53]` : "bg-black hover:bg-gray-500"
                        } border-0 py-2 px-4 w-full focus:outline-none rounded`}
                    >
                      Join
                    </button></Link>
                </div>
              </div>
            ))}
          </div>
        </div >
      </section >
    </>
  );
}
