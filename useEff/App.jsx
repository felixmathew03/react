import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(0);
  let [val,setVal]=useState(null);
  useEffect(()=>{
    fetchData();
  },[count])
  const fetchData=async()=>{
    const res=await fetch("https://dummyjson.com/products")
    const data=await res.json();
    setVal(data.products)
  }
  return (
    <>
      <button onClick={()=>setCount(count+=1)}>Click</button>
      {
        val?val.map((va,ind)=><h1 key={ind}>{va.title}</h1>):<h1>loading</h1>
      }
    </>
  )
}

export default App
