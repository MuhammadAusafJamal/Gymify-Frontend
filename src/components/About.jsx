import React from 'react'
import AboutImage from "../assets/hero.avif"
import Header from './Header'

export default function AboutUs() {
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">🏋️‍♂️ About Gymify
            </h1>
            <p className="mb-4 leading-relaxed">Welcome to <span className='font-medium'>Gymify</span> — where strength meets lifestyle and fitness becomes a habit, not a chore.</p>

            <p className="mb-4 leading-relaxed">At <span className='font-medium'>Gymify</span>, we don't just lift weights — we lift lives. Whether you're a complete beginner or a seasoned athlete, our mission is to empower you with the tools, training, and motivation you need to become the best version of yourself.</p>
            <p className='mb-4 leading-relaxed'>We believe fitness is not a destination — it's a lifestyle upgrade. With cutting-edge equipment, motivating coaches, and a vibe that makes you want to show up every day, <span className='font-medium'>Gymify</span> is more than just a gym — it's your second home.</p>
            <p className='mb-4 leading-relaxed'>So what are you waiting for?</p>
            <p className='mb-4 leading-relaxed'>Join the <span className='font-medium'>Gymify</span> movement — and let's sweat, grow, and conquer together.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={AboutImage} />
          </div>
        </div>
      </section>
    </div>
  )
}
