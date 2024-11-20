import React, { useState } from 'react'

const useCustomHook = (inhook) => {
    const [val,setVal]=useState(inhook)
    const decrement=()=>{
        setVal(val-1)
    }
    const increment=()=>{
        setVal(val+1)
    }
  return {val,increment,decrement}
}

export default useCustomHook
