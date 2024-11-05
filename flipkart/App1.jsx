import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputVal:"",
      items:[],
      category:[]
    }
  }
  async componentDidMount(){
    const res=await fetch('https://dummyjson.com/products');
    const data=await res.json();
    this.setState({items:[...data.products],category:[...new Set(data.products.map(item => item.category))]})
  }
  handleChange=(evnt)=>{
    this.setState({inputVal:evnt.target.value});
    let str=``;
    this.state.items.filter((i)=>i.title.toLowerCase().includes(evnt.target.value.toLowerCase())).map((item)=>{
      str+=`
        <div class="item" >
              <img src=${item.thumbnail} alt="" />
              <p>${item.title.substring(0,20)}</p>
              <p><b>$${item.price}</b></p>
              </div>`
      
    })
    document.getElementById("main").innerHTML=str;
  }
  render(){
    return <><nav>
      <h3>Flip.com</h3>
      <input className="input" name="text" placeholder="Search for products and more..."  value={this.state.inputVal} onChange={this.handleChange}type="search"/>
      <div className="log">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" /><p>Login</p>
      </div>
      <div className="log">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" /><p>Cart</p>
      </div>
      <div className="log">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
      </div>
    </nav>
        
    <h2 align="center" style={{marginBottom:"1%"}}><u>ALL PRODUCTS</u> </h2>
        <div className="main" id='main'>
          {this.state.items.map((item,ind)=>{
            return <div className="item" key={ind}>
              <img src={item.thumbnail} alt="" />
              <p>{item.title.substring(0,20)}</p>
              <p><b>${item.price}</b></p>
              </div>
          })}
        </div>
      {this.state.category.map((cat,ind)=>{
        const arr=[...this.state.items.filter((item) => item.category == cat)];
        return <div className="categories" key={ind}>
          <h2>{cat.toUpperCase()}</h2>
          <hr />
          <div className="category">
          {arr.map((item,ind)=>{
            return <div className="item" key={ind}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title.substring(0,20)}</p>
            <p><b>${item.price}</b></p>
            </div>
        })}
        </div>
        </div>
      })}
       
    </>
  }
}

export default App
