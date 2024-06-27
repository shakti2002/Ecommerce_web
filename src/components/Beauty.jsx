import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Beauty.css';

const Beauty = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/products/beauty');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} className="product-box">
          <div className="rating">{product.rating} ★</div>
          <img src={product.image} alt={product.details} className="product-image" />
          <div className="product-footer">
            <span className="product-price">{product.price}</span>
            <button onClick={() => addToCart(product)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beauty;