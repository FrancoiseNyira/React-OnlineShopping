import React, { useState } from 'react'
import './App.css';
import Amazon from './components/Amazon'
import Cart from './components/Cart'
import './Styles/Amazon.css'
import Footer from './components/Footer';
// import XXX from "./components/XXX";
// import './Styles/XXX.css'
import { Routes, Route, } from 'react-router-dom'
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import NavBar from "./components/NavBar"

 function App() {

  const [items, setItems] = useState([]);

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);



  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id === product.id)
      isPresent = true
    })
    if (isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      }, 2000);
      return; 
    }
      
    setCart([...cart, item]);   
}

const handleChange = (item, d) =>{
  let ind = -1;
  cart.forEach((data, index)=>{
    if (data.id === item.id)
      ind = index;
  });
  const tempArr = cart;
  tempArr[ind].amount += d;
  
  if (tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
  setCart([...tempArr])
}

  return(
    <React.Fragment>
       <NavBar size={cart.length} setShow={setShow} />
      
   
  
           
      {
        warning && <div className='warning'>This item is already added to your cart!</div>
      } 
 
     <div className="container mt-5">
     <Routes>
       <Route  exact path='/' element={<Home items={items} handleClick={handleClick}/>} />
       <Route exact path='/AddProduct' element={<AddProduct setItems={setItems} items={items}  />} />
       <Route  exact path='/Cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/> } />
     </Routes>
   </div>
   {/* <Amazon /> */}
     {/* <Cart />  */}
     {/* <Footer/>    */}

   </React.Fragment>                      
  )};

export default App;










