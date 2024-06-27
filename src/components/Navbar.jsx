

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import CSS file for styling if needed
// import { useState } from 'react';
// import axios from 'axios';

// const Navbar = ({ cart }) => {

//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState('');


//   const searchProducts = async (query) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/products/search?q=${query}`);
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error searching products:', error);
//     }
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     searchProducts(query);
//   };

  
//   return (
//     <div>
      
//     <nav className="navbar1">
//       <div className="navbar1-brand">
//         <Link to="/">MyApp</Link>
//       </div>
//       <ul className="navbar1-nav">
//         <li className="nav1-item">
//           <Link to="/" className="nav1-link">Home</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/men" className="nav1-link">Men</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/women" className="nav1-link">Women</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/kids" className="nav1-link">Kids</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/beauty" className="nav1-link">Beauty</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/cart" className="nav1-link">Cart ({cart.length})</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/help" className="nav1-link">Help</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/login" className="nav1-link">Login</Link>
//         </li>
//         <li className="nav1-item">
//           <Link to="/signup" className="nav1-link">SignUp</Link>
//         </li>
        
//       </ul>
//       <div className="navbar1-search">
//       <form onSubmit={handleSearch}>
//           <input 
//             type="text" 
//             value={query} 
//             onChange={(e) => setQuery(e.target.value)} 
//             placeholder="Search for products..."
//           />
//           <Link to="/search"> <button type="submit">Search</button></Link>
//         </form>
//       </div>

//     </nav>

//     <div className="products">
//         {products.map(product => (
//           <div key={product._id} className="product">
//             <img src={product.image} alt={product.details} />
//             <p>{product.details}</p>
//           </div>
//         ))}
//       </div>
//       </div>
//   );
// }

// export default Navbar;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import axios from 'axios';

const Navbar = ({ cart }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  };


  return (
    <nav className="navbar1">
      <div className="navbar1-brand">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="navbar1-nav">
        <li className="nav1-item">
          <Link to="/" className="nav1-link">Home</Link>
        </li>
        <li className="nav1-item">
          <Link to="/men" className="nav1-link">Men</Link>
        </li>
        <li className="nav1-item">
          <Link to="/women" className="nav1-link">Women</Link>
        </li>
        <li className="nav1-item">
          <Link to="/kids" className="nav1-link">Kids</Link>
        </li>
        <li className="nav1-item">
          <Link to="/beauty" className="nav1-link">Beauty</Link>
        </li>
        <li className="nav1-item">
          <Link to="/cart" className="nav1-link">Cart ({cart.length})</Link>
        </li>
        <li className="nav1-item">
          <Link to="/help" className="nav1-link">Help</Link>
        </li>
        <li className="nav1-item">
          <Link to="/login" className="nav1-link">Login</Link>
        </li>
        <li className="nav1-item">
          <Link to="/signup" className="nav1-link">SignUp</Link>
        </li>
      </ul>
      <div className="navbar1-search">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search for products..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
