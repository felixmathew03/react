import useCustomHook from './useCustomHook'
import './App.css'

function App() {
  const {val,increment,decrement}=useCustomHook(0)
  return (
    <>
    <div>
      <button onClick={decrement}>-</button>
      <span>{val}</span>
      <button onClick={increment}>+</button>
    </div>
    </>
  )
}

export default App
