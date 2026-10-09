import { useState } from 'react'
import './App.css'
import Display from './display'

function App() {
  const [name, setName] = useState('')

  return (
    <>
    <label>Enter your name:</label>
    <input type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e)=>setName(e.target.value)} />
    <Display name={name} />
    </>
  )
}

export default App
