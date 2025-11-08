import { useState } from 'react'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'
import Home from './components/pages/Home/Home'
import './App.css'

function App() {
  const [showSignup, setShowSignup] = useState(false)
  const [showHome, setShowHome] = useState(true) // lowercase for clarity
  const [showLogin, setShowLogin] = useState(false)
  
   const handleSignupClick = () => {
    setShowSignup(true)
    setShowHome(false)
  }

  const handleLoginClick = () => {
    setShowHome(false)
    setShowLogin(true)
    setShowSignup(false)
  }

  return (
    <>
      {showHome ? ( // ✅ Corrected here
        <Home onSignupClick={handleSignupClick} onLoginClick={handleLoginClick}  />
      ) : showSignup ? (
        <Signup onBackToLogin={() => setShowSignup(false)} onLoginClick={handleLoginClick} onLogoClick={() => setShowHome(true)} />
      ) : (
        <Login
          onSignupClick={() => setShowSignup(true)}
          onLogoClick={() => setShowHome(true)} // ✅ works now

        />
      )}
    </>
  )
}

export default App
