import React from 'react'
import "../App.css"
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className='hero-container min-h-[800px] md:min-h-[85vh] flex items-center justify-center p-2 mt-30 md:p-5 md:mt-20'>
      <div className='hero-content w-[100%] p-2 md:p-5'>
        <h1 className='text-5xl font-bold mb-2'>Transform Your Body</h1>
        <h1 className='text-5xl font-bold mb-2'> Elevate Your Life.</h1>
        <p className='mt-5'>At Gymify, we don't just train muscles — we build mindsets.</p>
        <p>Whether you're starting your fitness journey or pushing your limits,</p>
        <p>our expert trainers,powerful programs, and motivating environment are here to help you crush your goals  and become unstoppable.</p>
        <button className='mt-4 bg-[#a9d608] px-4 pt-3 pb-3 rounded font-semibold'><Link to="/signup">Start Now</Link></button>
      </div>
    </div>
  )
}
