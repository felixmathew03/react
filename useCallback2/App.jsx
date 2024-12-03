import { useCallback, useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber]=useState([1,2,3,4,5])
  const handleNumber=useCallback(()=>{
    setNumber((pre)=>([...pre,pre.length+1]))
  },[]);
  console.log("parent");
  
  return (
   <div>
    <h1>Use Callback</h1>
    <p>Count : {count}</p>
    <button onClick={()=>setCount((pre)=>pre+1)}>Add count</button>
    <Child addNumber={handleNumber}/>
    <div style={{marginTop:"30px"}}>
      <ul>
        {
          number.map((num,ind)=><li key={ind}>Number: {num}</li>)
        }
      </ul>
    </div>
   </div>
  )
}

export default App
