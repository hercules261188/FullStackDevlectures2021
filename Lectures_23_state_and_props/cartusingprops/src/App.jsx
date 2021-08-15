import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Cart from './components/Cart';
// parent component
function App() {
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalPrice, updateProductTotalPrice] = useState(0);
  useEffect(()=>{
    fetch('https://api.coincap.io/v2/assets?limit=6')
            .then(res=>res.json())
            .then(json=>console.log(json))
  },[]);
  useEffect(()=>{
    if(totalItemsInCart>0) {
      updateProductTotalPrice(totalPrice+10);
    }
  },[totalItemsInCart]);
  return (
    <div className="App">
      <Header 
      siteTitle="Product Listing Site" 
      totalItemsInCart={totalItemsInCart}
      />
      <Cart 
      setTotalItemsInCart={setTotalItemsInCart}
      totalItemsInCart={totalItemsInCart}
      updateProductTotalPrice={updateProductTotalPrice}
      totalPrice={totalPrice}
      />
      <h2>Total price: {totalPrice}</h2>
    </div>
  )
}

export default App
