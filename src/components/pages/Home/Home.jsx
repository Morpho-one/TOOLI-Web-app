import Logo from '../../../assets/Logo.svg'
import Avatar from '../../../assets/Avatar.svg'
import Cyber from '../../../assets/CyberCert.svg'
import Best from '../../../assets/Best.svg'
import CSCAU from '../../../assets/CSCAU.svg'

function Home({ onSignupClick, onLoginClick }) {
  return (
    <>
      <div className="min-h-screen bg-white m-0 p-0">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center px-8 py-6 relative bottom-10">
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
            <span 
            onClick={onLoginClick}
            className="text-black font-medium cursor-pointer hover:text-[#6849a3] transition">
              Login
            </span>
            <button
              onClick={onSignupClick}
              className="bg-gradient-to-b from-[#7c6af1] via-[#7c6af1] via-30% to-[#634fda] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex justify-center items-center mt-10 px-16 space-x-16">
          {/* Left Div — Avatar Section */}
          <div className="bg-gradient-to-r from-[#d8bffa] to-[#f4ddfa] w-[1200px] h-[700px] rounded-r-[60px] flex justify-end items-right shadow-md relative right-110 bottom-9">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-[420px] h-[700px] mb-0 mr-20"
            />
          </div>

          {/* Right Div — Text Content */}
          <div className="max-w-xl relative right-70 bottom-11">
            <h1 className="text-6xl font-semibold text-[#525761] leading-tight">
              Streamline Your <br /> Medical <br /> Document Upload
            </h1>
            <p className="text-[#202224] mt-5 text-base leading-relaxed font-medium font-poppins">
              Automatically allocate medical documents to patient’s file or the doctor’s inbox
              with our AI-powered software in just 15 seconds. Medical Document Reception tool
              provides a modern, efficient, and secure solution to medical document management.
            </p>

            <div className="flex space-x-4 mt-8">
              <button className="bg-gradient-to-b from-[#7c6af1] via-[#7c6af1] via-30% to-[#634fda] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
                Get Started
              </button>
              <button className="border-2 border-[#7561f7] text-[#7561f7] font-semibold px-6 py-3 rounded-lg hover:bg-[#f5f2ff] transition">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-10 mt-10 opacity-80">
              <img
                src={Cyber}
                alt="Certification 1"
                className="h-20 w-20"
              />
              <img
                src={Best}
                alt="Certification 2"
                className="h-22 flex relative right-6"
              />
              <img
                src={CSCAU}
                alt="Certification 3"
                className="h-20 flex relative right-19"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
