import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Home(){
    let [filter,setFilter]=useState("");
    let [items,setItems]=useState([]);
    let [category,setCatgory]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);
const fetchData=async()=>{
  const res=await fetch('https://dummyjson.com/products');
  const data=await res.json();
  setItems(data.products)
  const rescat=await fetch('https://dummyjson.com/products/categories');
  const datacat=await rescat.json();
  setItems([...datacat])
}
if(items.length==0) return <h1>Loading...</h1>
  return(  <>
  <div className="category">
    <section className="categories" onClick={()=>setFilter("")}>All</section>
    {
    
      category.map((cat,ind)=> <section className="categories" onClick={()=>setFilter(cat.name)}key={ind}>{cat.name}</section>)
    }
  </div>
  <h2 align="center" style={{marginBottom:"1%"}}>ALL PRODUCTS</h2>
  <input className="input" name="text" placeholder="Search for products and more..." type="search"/>
      <div className="main">
        {items.filter((item)=> item.category.includes(filter.toLowerCase())).map((item,ind)=> (
            <div className="item" key={ind}>
              <Link to={`/detail/${item.id}`} >
            <img src={item.thumbnail} alt="" />
            <p>{item.title.substring(0,20)}</p>
            <p><b>${item.price}</b></p>
            </Link>
            </div>
            )
        )}
      </div>
  </>
  )

}

export default Home;
