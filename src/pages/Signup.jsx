import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { BASE_URL } from "../api";

export default function Signup() {
   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    // Email Validation 

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Password Validation 

    const isValidPassword = (password) => {
        return password.length >= 6 && /[A-Z]/.test(password) && /[\d]/.test(password) && /[\W]/.test(password);
    };

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!isValidEmail(email)) {
            console.log("Email failed validation", email);
            toast.error("Invalid email");
            return;
        }

        if (!isValidPassword(password)) {
            toast.error("Password must be at least 6 characters long, contain an uppercase letter, a number, and a special character.");
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}register`, {name, email, password})
            if(response.data.success){
                toast.success("Account created successfully");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            if(error.status == 401){
                toast.error("User already exists");
            }else{
                toast.error("Signup failed. Try again.");
            }
            
        }
    }
  return (
   <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Join the Gymify Family</h2>
        <p className="text-center text-gray-600 mb-2">Your fitness journey starts now.</p>
        <p className="text-center text-gray-600 mb-8">
        Sign up today and take the first step toward a stronger, healthier, and more confident you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 mb-4">
              <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-[#a9d608] focus:bg-white px-3 py-2 text-gray-700"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-[#a9d608] focus:bg-white px-3 py-2 text-gray-700"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label htmlFor="password" className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:outline-none focus:border-[#a9d608] focus:bg-white px-3 py-2 text-gray-700"
              />
            </div>
            <div className="w-full px-2">
              <button
                type="submit"
                className="w-full bg-[#a9d608] text-white py-2 rounded hover:bg-[#a9d608] transition duration-200"
              >
                Sign Up
              </button>
              <p className="text-center">
                        Already have account? <Link to="/login" className='text-[#a9d608]'>Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
