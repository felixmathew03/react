import { useState,useEffect, useMemo } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  console.log("Parent");
  const x=useMemo(()=>{
    return calc(count)
  },[count])
  return (
    <>
      <button onClick={()=>setCount(count+=1)}>Parent count {x}</button>
    </>
  )
}

export default App

function calc(num){
  let result=0;
  for (let i = 0; i < 1000000; i++) {
    result+=i*num;
    
  }
  return result
}