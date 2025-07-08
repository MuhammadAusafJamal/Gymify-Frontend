import React from "react";
import Card from "./Card.jsx";
import Header from "./Header.jsx";

const servicesData = [
  {
    svg: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    name: "One-on-One Personal Training",
    description:
      "Achieve your goals faster with personalized workout plans, real-time guidance, and expert support from our certified trainers.",
    BtnText: "Book a Session",
  },
  {
    svg: (
      <>
        <path d="M17 20h5v-2a4 4 0 00-5-4" />
        <path d="M9 20H4v-2a4 4 0 015-4" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="15" cy="7" r="4" />
      </>
    ),
    name: "Energizing Group Workouts",
    description:
      "From Zumba to HIIT, our fun and high-energy group classes are perfect for boosting motivation and staying consistent — together!",
    BtnText: "View Schedule",
  },
  {
    svg: (
      <>
        <path d="M9 5h6" />
        <path d="M9 3h6a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </>
    ),
    name: "Customized Diet Plans",
    description:
      "Fuel your fitness with meal plans designed to match your goals — whether it's weight loss, muscle gain, or balanced nutrition.",
    BtnText: "Get My Plan",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <div id="services" className="mx-auto px-5 py-24">
        <h1 className="text-center text-4xl font-medium mb-5">Our Services</h1>
        <div className="flex flex-wrap items-center justify-center">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              svg={service.svg}
              name={service.name}
              description={service.description}
              BtnText={service.BtnText}
            />
          ))}
        </div>
      </div>
    </>
  );
}

