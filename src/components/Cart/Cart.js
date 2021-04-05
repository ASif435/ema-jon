import React, { useState } from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
   let shipping = 0;
   if (total < 0) {
       shipping = 0;
       
   }
    else if (total > 30) {
        shipping = 15.99;
    }
   else if(total > 100){
       shipping = 29.99;
   }
    else {
        shipping = 0;
       
   }
   const tax = (total / 10).toFixed(2);
   const totalGrand =  (total+ shipping + (Number(tax))).toFixed(2);
   const formetNumber =  num =>{
       const precision = num.toFixed(2);
       return Number(precision);
   }
    return (
        <div>
            <h3>order summary</h3>
            <h5>Items Ordered:  {cart.length}</h5>
            <p>Product price {formetNumber(total)}</p>
            <p><small>shipping: {shipping}</small></p>
            <p>
                <smal>tax: {tax}</smal>
            </p>
            <p>Total price:  $ {totalGrand}</p>
        </div>
    );
};

export default Cart;