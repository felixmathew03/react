import React, { memo } from 'react'

const Home = ({todo,callback}) => {
    console.log("child");
    
  return (
    <div>
      <h1>My todo</h1>
      <button onClick={callback}>Add todo</button>
      {
        todo.map((td,ind)=><p key={ind}>{td}</p>)
      }
    </div>
  )
}

export default memo(Home)
