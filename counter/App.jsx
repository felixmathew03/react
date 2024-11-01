import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){
    const increment=()=>{
      this.setState({count:this.state.count+=1})
    }
    const decrement=()=>{
      if(this.state.count>0)
        this.setState({count:this.state.count-=1})
    }
    return <div className="main">
      <button onClick={decrement}>-</button>
      <h3>Count {this.state.count}</h3>
      <button className='pos' onClick={increment}>+</button>
    </div>
  }
}

export default App