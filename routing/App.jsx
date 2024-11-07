import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import './App.css'

function App() {

  
  return (

    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About}/>
      </Routes>
    </BrowserRouter>

    // <>
    // <Nav/>
    // <Home/>
    // <About/>
    // </>
  )
}

export default App;
