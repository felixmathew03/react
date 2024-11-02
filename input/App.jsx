import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      inputVal:"",
      items:[]
    }
  }
  handleChange=(evnt)=>{
    this.setState({inputVal:evnt.target.value})
  }
  handleSubmit=()=>{
    this.setState({items:[...this.state.items,this.state.inputVal],inputVal:""})
  }
  deleteItem=(item)=>{
    console.log(item);
    this.setState({items:this.state.items.filter((i)=>{
      return i!=item
    })})
  }
  render(){
    console.log(this.state.count);
    
    return <div className="main">
      <div>
      <input type="text" value={this.state.inputVal} onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>ADD</button>
      <button onClick={()=>this.setState({count:10})}>Count {this.state.count}</button>
      </div>
      <div>
        <ul>
          {
            this.state.items.map((item,ind)=> <li key={ind}>{item} <button onClick={()=>this.deleteItem(item)}>Delete</button></li>
            )
          }
        </ul>
      </div>
    </div>
  }
}

export default App