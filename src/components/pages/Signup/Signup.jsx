

import Avatar from '../../../assets/Avatar.svg'
import inputlogo from '../../../assets/input-logo.svg'
import Email from '../../../assets/Email.svg'
import Password from '../../../assets/Password.svg'
import Social from '../../../assets/Social-icon.svg'
import { useState } from 'react'
import Logo from '../../../assets/Logo.svg'
function Signup() {
  return (
    <>
     <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#e3c8fb_0%,_#d8b7f9_40%,_#c6a4f7_60%)] m-0 p-0">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center px-8 py-6">
          {/* Left Section: Logo + Text */}
          <div className="flex items-center">
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
            <button className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Signup Box */}
        <div className="flex justify-start items-center mt-10 space-x-16 ml-10">
          
          <div className="h-auto w-[600px] bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col gap-4">

            

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

            
             


          </div>
        </div>
      </div>
    
   
            </>
  )
}

export default Signup