import { useState } from 'react'
import Child from './Child';
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  console.log("Parent");
  
  return (
    <>
      <button onClick={()=>setCount(count+=1)}>Parent count {count}</button>
      <Child/>
    </>
  )
}

export default App
