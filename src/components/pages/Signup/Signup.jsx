

import Avatar from '../../../assets/Avatar.svg'
import inputlogo from '../../../assets/input-logo.svg'
import Email from '../../../assets/Email.svg'
import Password from '../../../assets/Password.svg'
import Social from '../../../assets/Social-icon.svg'
import { useState } from 'react'
import Logo from '../../../assets/Logo.svg'
function Signup({onLoginClick, onLogoClick}) {
  return (
    <>
     <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#e9cff1_0%,_#e8cef0_100%)] m-0 p-0">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center px-8 py-6">
          {/* Left Section: Logo + Text */}
          <div className="flex items-center">
            <img
              onClick={onLogoClick}
              src={Logo}
              alt="Tooli Logo"
              className="w-28 h-28 inline-block"
            />
            <span className="ml-2 text-[#38afa4] font-semibold text-lg font-poppins">
              Medical Document Upload
            </span>
          </div>

          {/* Right Section: Links + Button */}
          <div className="flex items-center space-x-6">
            <span className="text-black font-medium cursor-pointer hover:text-[#6849a3] transition">
              Security
            </span>
            <span 
            
            onClick={onLoginClick}
            className="text-black font-medium cursor-pointer hover:text-[#6849a3] transition">
              Login
            </span>
            <button className="bg-gradient-to-b from-[#7c6af1] via-[#7c6af1] via-30% to-[#634fda] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Signup Box */}
        <div className="flex justify-start items-center mt-10 space-x-16 ml-150">
          
          <div className="h-auto w-[680px] bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col gap-4">

            

            <h2 className="text-[#38afa4] font-semibold text-2xl">Sign Up</h2>

             <h2 className="font-semibold text-xl">Personal Details</h2>
            
            {/* Row 1 */}
            <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

              

             
            </div>

            <h2 className="font-semibold text-xl">Business Details</h2>

            {/* Row 3 */} 
            <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Clinic/Company Name"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="ABN Number"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>

            {/* Row 4 */}
             <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>

             <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="State"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Postcode"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>

            <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

            
              <h2 className="font-semibold text-xl">Account Security</h2>


              
             <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>


             <h2 className="font-semibold text-xl">Key Contacts</h2>

              <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Practice Manager Name"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Practice Manager Email"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>


            <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="IT Support Team Name"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="IT Support Team Email"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>

            <h2 className="font-semibold text-xl">Other Major Contacts (Optional)</h2>

             <div className="flex flex-row gap-3">
              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Project Manager Na..."
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

              

               <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="Practice Manager Email"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

              <div className="flex items-center border border-[#d5d7da] rounded-lg p-2 w-1/2 bg-white">
                <input
                  type="text"
                  placeholder="IT Support Team Name"
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                />
              </div>

             
            </div>
            
            <p className="text-[#FF0000]">Caution : If we find the account suspicious, our system will delete your account <br></br>   without any notice</p>

            <div className=" border border-[#d5d7da] p-2 w-[630px] h-auto  rounded-lg">
            
            <p>This software and its underlying idea, design, code, and implementation are the intellectual property of our organization. Any unauthorized copying, reproduction, distribution, modification, or use of this software, in whole or in part, without explicit written permission from the owner, is strictly prohibited and may result in legal action.
Account will be suspended if the user is found to be not a medical clinic owner/ practice manager /authorised person for the entity
All rights reserved. Unauthorized use of this software, including but not limited to reverse engineering, replication, or commercial exploitation, is a violation of intellectual property laws. The owner reserves the right to take legal action against any individual or entity found to be in violation of these terms.
For licensing inquiries or permissions, please contact us.</p>
            
            </div>

            <div className="flex items-center justify-between border border-[#d5d7da] rounded-lg p-3 mt-1 w-1/3 relative left-1 bg-white">
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

<div className="flex items-center mt-1 relative left-1 w-auto">
  <input
    id="policy-agreement"
    type="checkbox"
    className="h-[18px] w-[18px] rounded border-gray-300 text-[#38afa4] focus:ring-[#38afa4]"
  />
  <label htmlFor="policy-agreement" className="ml-2 text-sm text-gray-700">
    I have read and agree to the{" "}
    <a href="#" className="text-[#0055ff] hover:underline">
      Privacy
    </a>{" "}
    and{" "}
    <a href="#" className="text-[#0055ff] hover:underline">
      Security
    </a>{" "}
    Policy.
  </label>
</div>

<div className="mt-6 relative left-2">
  <button
    type="submit"
    className="w-[550px] h-[72px] bg-[#c1b4f8] text-white font-semibold text-lg rounded-xl shadow-md hover:opacity-90 transition"
  >
    Register
  </button>

   <p 
   
   onClick={onLoginClick}
   className="mt-2 text-sm text-gray-700 cursor-pointer hover:text-[#6849a3] transition">
    Already registered?{" "}
   
  </p>
</div>
          </div>

          <img
      src={Avatar}
      alt="Avatar illustration"
      className="w-[300px] h-auto object-contain drop-shadow-lg relative left-30 bottom-120"
      style={{ filter: 'drop-shadow(-120px 0 15px #b1a4d4)' }}
    />
        </div>

        
      </div>
    
   
            </>
  )
}

export default Signup