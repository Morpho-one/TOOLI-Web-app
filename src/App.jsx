import { useState } from 'react'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Signup/Signup'

import './App.css'


function App() {


  const [showSignup, setShowSignup] = useState(false)
  

  return (
    <>
      {showSignup ? (

        <Signup onBackToLogin={() => setShowSignup(false)}></Signup>
      ):(
        <Login onSignupClick={() => setShowSignup(true)}></Login>
      )}
    </>
  )
}

export default App
