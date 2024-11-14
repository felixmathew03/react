import { useCallback, useState } from 'react'
import Home from './components/Home';
import './App.css'

function App() {
  console.log("parent");
  
  let [count,setCount]=useState(0);
  const [todo,setTodo]=useState([]);
  const increment=()=>{
    setCount(count+=1)
  }
  const addTodo=useCallback(()=>{
    setTodo((td)=>[...td,"new todo"])
  },[todo])
  return (
    <>
    <div>
    <h1>Count {count}</h1>
     <button onClick={increment}>Add</button>
     </div>
     <hr />
     <Home todo={todo} callback={addTodo}/>
    </>
  )
}

export default App
