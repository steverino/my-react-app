import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminPanel from './components/AdminPanel'
import LoginForm from './components/LoginForm'

function App() {
  const [content, setContent] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if (isLoggedIn) {
      setContent(<AdminPanel />)
    } else {
      setContent(<LoginForm />)
      
    }
    
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
    
  }
  
  console.log(content)
  
  return (
    <>
    <button onClick={handleSubmit}>Switch</button>
      {content}
    </>
  )
}

export default App
