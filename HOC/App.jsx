import { useEffect, useState } from 'react'
import './App.css'
import withLoader from './HOC'
import BaseComponent from './BaseComponent'

const EnhancedDataDisplay=withLoader(BaseComponent)
function App() {
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setData(["Item1","Item2","Item3"]);
      setIsLoading(false)
    },5000)
  },[])
  return <EnhancedDataDisplay isLoading={isLoading} data={data}/>
}

export default App
