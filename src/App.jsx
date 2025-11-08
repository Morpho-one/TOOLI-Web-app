import { useState } from 'react'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'
import Home from './components/pages/Home/Home'
import './App.css'

function App() {
  const [showSignup, setShowSignup] = useState(false)
  const [showHome, setShowHome] = useState(false) // lowercase for clarity

  return (
    <>
      {setShowHome ? ( // ✅ Corrected here
        <Home  />
      ) : showSignup ? (
        <Signup onBackToLogin={() => setShowSignup(false)} />
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
