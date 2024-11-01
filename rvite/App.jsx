import React from 'react'
import './App.css'
import Section from './lists/Section'
import Tools from './lists/Tools'
const lst=[
  {
    title:"Rambaan",
    director:"Joshy",
    active:false
  },
  {
    title:"Neru",
    director:"Jeethu",
    active:true
  },
  {
    title:"Lucifer",
    director:"Prthvi",
    active:true
  },
  {
    title:"Empuraan",
    director:"Prthvi",
    active:false
  },
]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:lst
    }
  }
  render(){
    const onlistChange=(evnt)=>{
      console.log(evnt.target.value);
      const newList=lst.filter((item)=>{
        if(evnt.target.value=="all"){
          return true
        }
        if(evnt.target.value=="active"){
          return item.active==true
        }
        if(evnt.target.value=="notactive"){
          return item.active==false
        }
      });
      this.setState({data:newList})
    }
    return (
      <>
        {/* <ol>{a.map((el,ind)=> <li key={ind}> {el}</li>)}</ol> */}
        <nav style={{padding:"20px",textAlign:"center",backgroundColor:"red",color:"white"}}>
          <h1>MOHANLAL</h1>
        </nav>
        <Tools onAction={onlistChange}>
      <div>
  
        {
          this.state.data.map((el,ind)=>
            <Section title={el.title} director={el.director} active={el.active} key={ind}/>
        )
      }
      </div>
      </Tools>
      </>
    )
  }
}

export default App
