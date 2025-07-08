import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-[#0d0d0d] fixed w-[100%] top-0 z-1">
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-white">Gymify 💪</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
            <Link to="/" className='mr-5 hover:text-white-900 font-medium text-xl'>Home</Link>
            <Link to="/about-us" className='mr-5 hover:text-white-900 font-medium text-xl'>About Us</Link>
            <Link to="/services" className='mr-5 hover:text-white-900 font-medium text-xl'>Services</Link>
            <Link to="/pricing" className='mr-5 hover:text-white-900 font-medium text-xl'>Pricing</Link>
          </nav>
          <Link to="/login">
            <button className="inline-flex items-center bg-[#a9d608] border-0 py-2 px-6 focus:outline-none hover:bg-[#a9d608] rounded text-base mt-4 md:mt-0 font-medium cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
