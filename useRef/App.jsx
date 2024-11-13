
import { useRef,useState,useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;
