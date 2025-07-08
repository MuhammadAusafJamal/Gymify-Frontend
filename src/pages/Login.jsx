import React, { useState } from 'react'
import axios from "axios"
import InputField from '../components/InputField'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';
import { toast } from "react-toastify"
import { BASE_URL } from "../api";
import Header from '../components/Header';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}login`, { email, password })
      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("useremail", response.data.user.email);
        toast.success("Login Successfully 🎉")
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.status == 404) {
        toast.error("User does not exist");
      } else {
        toast.error("Invalid email or password ❌");
      }

    }
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-2xl md:text-5xl text-gray-900 text-center">Welcome Back to Gymify 💪</h1>
          <p className="leading-relaxed mt-4 text-center">
            Unleash your potential — one workout at a time.
          </p>
          <p className="leading-relaxed mt-4 text-center">Log in to access your personalized fitness dashboard, track your progress, view your membership details, and stay connected with your fitness journey. Whether it's day one or day one hundred, we're with you every step, rep, and goal.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h1 className="text-gray-900 font-medium title-font mb-5 text-center text-lg md:text-3xl">Login</h1>

          <form onSubmit={handleSubmit}>
            <InputField forAtt="email" label="Email" type="text" id="email" name="email" onChangeFunction={(e) => setEmail(e.target.value)} />
            <InputField forAtt="password" label="Password" type="password" id="password" name="password" onChangeFunction={(e) => setPassword(e.target.value)} />

            <Link to="/forget" className='text-[#92b906]'>Forget Password? </Link>
            <button type="submit" className="w-full text-white bg-[#92b906] border-0 py-2 px-8 focus:outline-none hover:bg-[#a9d608] cursor-pointer rounded text-lg mt-4">
              Login
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Don't have an account? <Link to="/signup" className="text-[#92b906] hover:underline">Signup</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
