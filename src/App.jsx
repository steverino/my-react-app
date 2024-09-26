import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminPanel from './components/AdminPanel'
import LoginForm from './components/LoginForm'

function App() {
  const [content, setContent] = useState(0)
  const isLoggedIn = true;

  useEffect(()=>{


    if (isLoggedIn){
      setContent(<AdminPanel />)
    } else {
      setContent(<LoginForm />)
    
    }
  },[])
  return (
    <>
      
    </>
  )
}

export default App
