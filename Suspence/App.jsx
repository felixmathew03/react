import React, { lazy, Suspense } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
const App = () => {
  let Chl1=lazy(()=>setData(import('./Child1')))
  let Chl2=lazy(()=>setData(import('./Child2')))
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading....</h1>}>
      <Routes>
        <Route path='/' element={<Chl1/>}/>
        <Route path='/child2' element={<Chl2/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App

async function setData(comp) {
  await new Promise((res)=> setTimeout(res,3000));
  return comp;
}