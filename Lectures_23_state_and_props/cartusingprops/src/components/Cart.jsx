import React, {useState} from 'react'
import "./Cart.css";
export default function Cart(props) {
    // console.log("props in cart component", props);
    function handleAddToCartClick() {
        // console.log("button clicked",props);
        const currentCartValue = props.totalItemsInCart;
        props.setTotalItemsInCart(currentCartValue+1);
    }
    return (
        <div className="products-card-container">
           <div className="product-card">
               <div>Product Name</div>
               <div>Product Description</div>
               <div>Product price: 10</div>
               <button onClick={handleAddToCartClick}>Add to cart</button>
           </div>
        </div>
    )
}
