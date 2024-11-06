import { useState } from 'react';
import './App.css'

function App() {
  let [val,setVal]=useState({
    name:"",
    age:""
  })
  const handleChange=(e)=>{
    setVal(pre=>({...pre,[e.target.name]:e.target.value}))
  }
  const onHandleSubmit=(e)=>{
    e.preventDefault();
    console.log(val);
  }
  return (
    <>
    <form action="">
      <input type="text" name="name" placeholder='Name' onChange={handleChange}/>
      <input type="text" name="age" placeholder='Age' onChange={handleChange}/>
      <button onClick={onHandleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default App;
