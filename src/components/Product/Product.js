import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, stock, img} = props.product;
  
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-data">
                <h4>{name}</h4>
                <p><small>only {stock} left </small></p>
                <br/>
                <p>price $ {price}</p>
                <button className="btn btn-danger" onClick={() => props.hendleAddCart(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;