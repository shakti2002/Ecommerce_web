// import React from 'react';
// import './Men.css'; // Make sure to create and style this CSS file



// import image1 from './image/men_shirt.jpg';
// import image2 from './image/men_shirt.jpg';
// import image3 from './image/men_shirt.jpg';
// import image4 from './image/men_shirt.jpg';
// import image5 from './image/men_shirt.jpg';
// import image6 from './image/men_shirt.jpg';
// import image7 from './image/men_shirt.jpg';
// import image8 from './image/men_shirt.jpg';
// import image9 from './image/men_shirt.jpg';
// import image10 from './image/men_shirt.jpg';
// import image11 from './image/men_shirt.jpg';
// import image12 from './image/men_shirt.jpg';
// import image13 from './image/men_shirt.jpg';
// import image14 from './image/men_shirt.jpg';
// import image15 from './image/men_shirt.jpg';
// import image16 from './image/men_shirt.jpg';


// const products = [
//     { id: 1, image: image1, price: '$10' },
//     { id: 2, image: image2, price: '$20' },
//     { id: 3, image: image3, price: '$30' },
//     { id: 4, image: image4, price: '$40' },
//     { id: 5, image: image5, price: '$50' },
//     { id: 6, image: image6, price: '$60' },
//     { id: 7, image: image7, price: '$70' },
//     { id: 8, image: image8, price: '$80' },
//     { id: 9, image: image9, price: '$90' },
//     { id: 10, image: image10, price: '$100' },
//     { id: 11, image: image11, price: '$110' },
//     { id: 12, image: image12, price: '$120' },
//     { id: 13, image: image13, price: '$130' },
//     { id: 14, image: image14, price: '$140' },
//     { id: 15, image: image15, price: '$150' },
//     { id: 16, image: image16, price: '$160' },
//   ];

//   const Men = ({ addToCart }) => {
//     return (
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-box">
//             <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
//             <div className="product-footer">
//               <span className="product-price">{product.price}</span>
//               <button onClick={() => addToCart(product)} className="add-to-cart">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default Men;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Men.css';

// const Men = ({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/products/men');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-grid">
//       {products.map((product) => (
//         <div key={product._id} className="product-box">
//           <img src={product.image} alt={product.details} className="product-image" />
//           <div className="product-footer">
//             <span className="product-price">{product.price}</span>
//             <button onClick={() => addToCart(product)} className="add-to-cart">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Men;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Men.css';

const Men = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/products/men');
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

export default Men;
