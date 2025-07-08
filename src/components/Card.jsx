import React from "react";

export default function Card(props) {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#d7f177] text-[#a9d608] mb-5 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10"
          viewBox="0 0 24 24"
        >
          {props.svg}
        </svg>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
          {props.name}
        </h2>
        <p className="leading-relaxed text-base">{props.description}</p>
        <a href="/signup" className="mt-3 text-[#89ac07] inline-flex items-center cursor-pointer">
          {props.BtnText}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
