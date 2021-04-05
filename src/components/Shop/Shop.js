import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,50);
    const [products, setProducts] = useState(first10);
    const  [cart, setCart] = useState([]);

    const hendleAddCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
    }
    return (
        
        <div className="container-shop">
            <div className="w-10"></div>
            <div className="w-60">
                {
                    products.map(pd => <Product 
                        hendleAddCart = {hendleAddCart}
                        product={pd}></Product>)
                }
            </div>
            <div className="w-20">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;