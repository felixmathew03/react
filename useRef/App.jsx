import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef=useRef();
  const accesRef=()=>{
    console.log(inputRef.current.value);
    
  }
  return (
    <>
     <input type="text" placeholder='name' ref={inputRef}/>
     <button onClick={accesRef}>Add</button>
    </>
  )
}

export default App
