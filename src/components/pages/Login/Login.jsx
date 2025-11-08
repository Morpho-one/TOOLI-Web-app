
import Logo from '../../../assets/Logo.svg'
import Avatar from '../../../assets/Avatar.svg'
import inputlogo from '../../../assets/input-logo.svg'
import Email from '../../../assets/Email.svg'
import Password from '../../../assets/Password.svg'
import Social from '../../../assets/Social-icon.svg'
import { useState } from 'react'

function login({ onSignupClick, onLogoClick }) {

  

  

    return (

        <>

        <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#e9cff1_0%,_#e8cef0_100%)] m-0 p-0">
 {/* Top Navigation Bar */}
      <div className="flex justify-between items-center px-8 py-6">

        {/* Left Section: Logo + Text */}
        <div className="flex items-center"
        onClick={onLogoClick}>
          <img
            src={Logo}
            alt="Tooli Logo"
            className="w-28 h-28 inline-block"
          />
          <span className="ml-2 text-[#38afa4] font-bold text-lg">
            Medical Document Upload
          </span>
        </div>

        {/* Right Section: Links + Button */}
        <div className="flex items-center space-x-6">
          <span className="text-black font-medium cursor-pointer hover:text-[#6849a3] transition">
            Security
          </span>
          <span className="text-black font-medium cursor-pointer hover:text-[#6849a3] transition">
            Login
          </span>
          <button 
          
          onClick={onSignupClick}
          className="bg-gradient-to-b from-[#7c6af1] via-[#7c6af1] via-30% to-[#634fda] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>


    <div className="flex justify-center items-center mt-10 space-x-16">

      <div className="h-auto w-[450px] bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-lg p-8 justify-items-center">

<img className='w-65 h-35' src={inputlogo}></img>

<h2 className="ml-2 relative -top-3 text-[#38afa4] font-bold text-lg ">Medical Document Upload</h2>

<div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-11/12 bg-white">
  <img src={Email} alt="Email Icon" className="w-[22px] h-[22px] mr-2 opacity-70" />
   <input
    type="text"
    placeholder="Email Address"
    className="w-full outline-none bg-transparent placeholder-gray-400"
  />
</div>

<div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-11/12 mt-4 bg-white">
  <img
    src={Password}
    alt="Password Icon"
    className="w-[22px] h-[22px] mr-2 opacity-70"
  />
  <input
    type="password"
    placeholder="Password"
    className="w-full outline-none bg-transparent placeholder-gray-400"
  />
</div>

{/* Remember Me + Forgot Password Row */}
<div className="flex items-center justify-between mt-3 w-full ml-8">
  {/* Left: Remember Me */}
  <div className="flex items-center">
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-[22px] w-[22px] rounded border border-gray-300 bg-white appearance-none cursor-pointer 
               relative checked:bg-[#c5b7f6] checked:before:content-['✓'] checked:before:absolute 
               checked:before:top-[-2px] checked:before:left-[4px] checked:before:text-white 
               checked:before:text-[18px] checked:before:font-bold"
    />
    <label
      htmlFor="remember-me"
      className="ml-2 text-sm font-normal text-gray-900"
    >
      Remember me
    </label>
  </div>

  {/* Right: Forgot Password */}
  <a
    href="#"
    className="text-sm font-medium text-[#000] hover:text-[#2e9689] transition"
  >
    Forgot Password?
  </a>
</div>

<div className="flex items-center justify-between border border-[#d5d7da] rounded-lg p-3 mt-4 w-1/2 relative right-22 bg-white">
  <div className="flex items-center">
    <input
      id="not-robot"
      type="checkbox"
      className="h-[22px] w-[22px] rounded border-gray-300 text-[#38afa4] focus:ring-[#38afa4]"
    />
    <label htmlFor="not-robot" className="ml-2 text-sm text-gray-700">
      I’m not a robot
    </label>
  </div>
  <img
    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
    alt="reCAPTCHA logo"
    className="w-8 h-8 opacity-70"
  />
 
{/* Testing comment */}
</div>



<button
  className="w-11/12 h-[38px] bg-[#c1b4f8] text-white font-semibold text-xl rounded-xl mt-6 hover:bg-[#b3a2f4] transition-all duration-200 shadow-md relative left-4"
>
  Sign In
</button>

<p className='w-[20px] h-[10px] relative top-5 right-1'>OR</p>


<button className="flex items-center justify-center w-11/12 h-[40px] bg-white text-black font-medium text-lg rounded-xl mt-12 border border-gray-300 shadow-sm hover:bg-gray-100 transition-all duration-200">
  <img
    src={Social}
    alt="Google Icon"
    className="w-6 h-6 mr-3"
  />
  Login with Google
</button>

<p className="text-center text-black text-sm mt-6">
  Don’t have an account?{" "}
  <a
    href="#"
     onClick={(e) => {
    e.preventDefault();
    onSignupClick()
  }}
    className="text-[#9e87fe] font-medium hover:text-[#8671fa] transition"
  >
    Create Account
  </a>
</p>



      
      </div>


       <img
    src={Avatar}
    alt="Avatar"
    className="w-[400px] h-[400px] ml-30  "
   style={{ filter: 'drop-shadow(-120px 0 15px #b1a4d4)' }}
  />

      </div>

      </div>

   
         </>
    )
}

export default login