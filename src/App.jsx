import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-blue-100'>
       <div className='bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full'>
         <h1 className='text-3xl font-bold text-center'>Weather App</h1>
       </div>
      </div>
    </>
  )
}

export default App
