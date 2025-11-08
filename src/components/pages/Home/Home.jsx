import Logo from '../../../assets/Logo.svg'
import Avatar from '../../../assets/Avatar.svg'

function Home({ onSignupClick }) {
  return (
    <>
      <div className="min-h-screen bg-white m-0 p-0">
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
            <button
              onClick={onSignupClick}
              className="bg-[#816df5] text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex justify-center items-center mt-10 px-16 space-x-16">
          {/* Left Div — Avatar Section */}
          <div className="bg-[#E9CFF1] w-[780px] h-[700px] rounded-r-[60px] flex justify-end items-right shadow-md relative right-110 bottom-9">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-[320px] h-[680px] mt-7 mr-20"
            />
          </div>

          {/* Right Div — Text Content */}
          <div className="max-w-xl">
            <h1 className="text-6xl font-semibold text-{#3c3c3c} leading-tight">
              Streamline Your <br /> Medical <br /> Document Upload
            </h1>
            <p className="text-gray-600 mt-5 text-base leading-relaxed">
              Automatically allocate medical documents to patient’s file or the doctor’s inbox
              with our AI-powered software in just 15 seconds. Medical Document Reception tool
              provides a modern, efficient, and secure solution to medical document management.
            </p>

            <div className="flex space-x-4 mt-8">
              <button className="bg-[#816df5] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
                Get Started
              </button>
              <button className="border border-[#816df5] text-[#816df5] font-semibold px-6 py-3 rounded-lg hover:bg-[#f5f2ff] transition">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-10 mt-10 opacity-80">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Check_mark.svg/32px-Check_mark.svg.png"
                alt="Certification 1"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Check_mark.svg/32px-Check_mark.svg.png"
                alt="Certification 2"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Check_mark.svg/32px-Check_mark.svg.png"
                alt="Certification 3"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
