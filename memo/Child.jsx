import React, { useState,memo } from 'react'

const Child = () => {
    let [count,setCount]=useState(0);
    console.log("Child");
    
  return (
    <div>
      <button onClick={()=>setCount(count+=1)}>Child Count {count}</button>
    </div>
  )
}

export default memo(Child)
