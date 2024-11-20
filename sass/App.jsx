import useCustomHook from './useCustomHook'
import './App.scss'

function App() {
  const {val,increment,decrement}=useCustomHook(0)
  return (
    <>
    <div className='main'>
      <button className='btn' onClick={decrement}>-</button>
      <span>{val}</span>
      <button className='btn' onClick={increment}>+</button>
    </div>
    </>
  )
}

export default App
