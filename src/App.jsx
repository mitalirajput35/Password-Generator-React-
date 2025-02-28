import { useState } from 'react'



function App() {
  const[length, setLength] = useState("8")
  const[allowedNumber, setAllowedNumber] = useState("false")
  const[allowedChar, setAllowedChar] = useState("false")
  const[password, setPassword] = useState("f")

  return (
     <div className="h-screen"
      style={{backgroundColor: "gray"}}
      >
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
     </div>
        
    
  )
}

export default App
