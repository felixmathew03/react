import React, { createContext, useContext, useState } from 'react'
const UserContext=createContext();
const App = () => {
  const [user,setuser]=useState("Soman");
  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>Hai {user}</h1>
        <Comp1/>
      </UserContext.Provider>
    </div>
  )
}
export default App
function Comp1() {
  return(
    <>
    <h1>Component1</h1>
    <Comp2/>
    </>
  )
}
function Comp2() {
  return(
    <>
    <h1>Component2</h1>
    <Comp3/>
    </>
  
  )
}
function Comp3() {
  return(
    <>
    <h1>Component3</h1>
    <Comp4/>
    </>
  )
}
function Comp4() {
  const usr=useContext(UserContext)
  return(
    <h1>Component4 {usr}</h1>
  )
}