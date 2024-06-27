// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const Search = () => {
//   const [products, setProducts] = useState([]);
//   const location = useLocation();
  
//   const query = new URLSearchParams(location.search).get('q');

//   useEffect(() => {
//     const searchProducts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/products/search?q=${query}`);
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error searching products:', error);
//       }
//     };

//     if (query) {
//       searchProducts();
//     }
//   }, [query]);

//   return (
//     <div className="products">
//       {products.map(product => (
//         <div key={product._id} className="product">
//           <img src={product.image} alt={product.price} />
//           <p>{product.price}</p>
//           <p>{product.rating}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Search;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Search.css';

const Search = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
                                                                
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await axios.get(`https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/products/search?q=${query}`);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    };

    if (query) {
      searchProducts();
    }
  }, [query]);

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

export default Search;
