import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:"",
      items:[]
    }
  }
  async componentDidMount(){
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    this.setState({items:[...data.products]})
  }
  render(){
    console.log(this.state.items);
    return <div className="main">
      {this.state.items.map((item)=>{
        return <div className="item">
          <h1>{item.title.substring(0,15)}</h1>
          <img src={item.thumbnail} alt="" />
          </div>
      })}
    </div>
  }
}

export default App