import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  

  let [value,setValue]=useState(5)

  const addValue=()=>{
    value=value+1;
    if(value>20) alert('Not allowed')

    else setValue(value)
  }

  const removeValue=()=>{
    value=value-1;

    if(value<0) alert('Value not alowed below 0')

    else setValue(value)
  }
  return (
    <>
    <h1>Lets know Why we use hooks</h1>
    <h2>Counter is {value}</h2>
    <button onClick={addValue}>Add Value {value}</button>
    <br/>
    <button onClick={removeValue}>Remove Value {value}</button>
    </>
  )
}

export default App
