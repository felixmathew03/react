import { useState } from 'react';
import './App.css'

function App() {
  let [task,setTask]=useState("");
  let [todo,setTodo]=useState([]);
  const addTask=()=>{
    console.log(task);
    task?setTodo(pre=>([...pre,task])):alert("Add Task");
    setTask("")
  }
  console.log(todo);
  
  return (
    <>
<div className="todo">

      <input type="text"  placeholder='Task' onChange={(e)=>setTask(e.target.value)} value={task}/>
      <button onClick={addTask}>Add Task</button>
    
<ul>
  {todo.map((item,ind)=><li key={ind}>{item}</li>)}
</ul>
</div>
    </>
  )
}

export default App;
