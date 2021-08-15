import React from 'react';
import "./Header.css"
// child component
export default function Header(propValues) {
    // console.log("props value", propValues)
    return (
        <div>
            <header className="header">
                <span>{propValues.siteTitle}</span>
                <span className="cart">Cart: {propValues.totalItemsInCart}</span>
            </header>
        </div>
    )
}
