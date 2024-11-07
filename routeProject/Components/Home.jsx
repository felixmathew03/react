import React,{useState, useEffect} from 'react'

function Home(){
  
    let [inputVal,setInputVal]=useState("")
    let [items,setItems]=useState([])
    useEffect(()=>{
      fetchData();
    },[]);
const fetchData=async()=>{
  const res=await fetch('https://dummyjson.com/products');
  const data=await res.json();
  setItems([...data.products])
}

  return(  <>
  <h2 align="center" style={{marginBottom:"1%"}}>ALL PRODUCTS</h2>
  <input className="input" name="text" placeholder="Search for products and more..." type="search"/>
      <div className="main">
        {items.map((item,ind)=>{
          return (<div className="item" key={ind}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title.substring(0,20)}</p>
            <p><b>${item.price}</b></p>
            </div>
            )
        })}
      </div>
  </>
  )

}

export default Home;