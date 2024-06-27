
// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import Men from './components/Men';
// import Women from './components/Women';
// import Cart from './components/Cart';
// import { useState , useEffect} from 'react';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Modal from './components/Modal';
// import Help from './components/Help';
// import Search from './components/Search';
// import Beauty from './components/Beauty';
// import Kids from './components/Kids';
// import AddressForm from './components/AddressForm';
// import OrderSummary from './components/OrderSummary';




// function App() {

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (index) => {
//     setCart(cart.filter((_, i) => i !== index));
//   };


//   //USE effect in website 
  
//   const [showModal, setShowModal] = useState(false);
//   const [loggedIn, setloggedIn]=useState(!!localStorage.getItem("email"))
//   const [signup, setsignup]=useState(!!localStorage.getItem("email"))

//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!loggedIn && !signup) {
//         console.log("shrinath")
//         setShowModal(true);

//       }
      
//     }, 10000); // 60000 milliseconds = 1 minute

//     return () => clearTimeout(timer);
//   }, [loggedIn, signup]);

//   const handleClose = () => setShowModal(false);

//   //handle login function
//    const handleLogin = () => {
//     setloggedIn(true);
//     setShowModal(false);
//    };

//   const handleSignup=() =>{
//     setsignup(true);
//     setShowModal(false);
//   }

//   const placeOrder = (selectedItems) => {
//     console.log('Order placed for items:', selectedItems);
//   };

//   return (
//     <div className="App">
//     <Router>
//       <Navbar cart={cart}/>
//       <div>
//       <Routes>
//         <Route path='/men'  element={<Men addToCart={addToCart} />}/> 
//         <Route path='/' element={<Home/>}/>
//         <Route path='/women' element={<Women addToCart={addToCart} />}/>
//         <Route path='/beauty' element={<Beauty addToCart={addToCart}/>}/>
//         <Route path='/kids' element={<Kids addToCart={addToCart} />}/>
//         <Route path='/cart'  element={<Cart removeFromCart={removeFromCart} cart={cart} placeOrder={placeOrder}/>}/>
//         <Route path='/login' element={<Login onLogin={handleLogin}/>}/>
//         <Route path='/signup' element={<Signup onSignup={handleSignup}/>}/>
//         <Route path='/help' element={<Help/>}/>
//         <Route path='/search' element={<Search addToCart={addToCart}/>}/>
//         <Route path='/address-form' element={<AddressForm placeOrder={placeOrder}/>}/>
//         <Route path='/order-summary' element={<OrderSummary/>}/>
        
//        </Routes>
//        <Modal show={showModal} handleClose={handleClose}>
//           <h2>Please Login or Signup</h2>
//           <Login onLogin={handleLogin} />
//           <Signup onSignup={handleSignup} />
//         </Modal>
       

//       </div>
       
      
//     </Router>
//     </div>
//   );
// }




// export default App;



import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Modal from './components/Modal';
import Help from './components/Help';
import Search from './components/Search';
import Beauty from './components/Beauty';
import Kids from './components/Kids';
import AddressForm from './components/AddressForm';
import OrderSummary from './components/OrderSummary';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handlePlaceOrder = (selectedAddress, selectedProducts) => {
    setSelectedAddress(selectedAddress);
    setSelectedProducts(selectedProducts);
  };

  // Handle login and signup states
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("email"));
  const [signup, setSignup] = useState(!!localStorage.getItem("email"));

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loggedIn && !signup) {
        setShowModal(true);
      }
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer);
  }, [loggedIn, signup]);

  const handleClose = () => setShowModal(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowModal(false);
  };

  const handleSignup = () => {
    setSignup(true);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} />
        <div>
          <Routes>
            <Route path='/men' element={<Men addToCart={addToCart} />} />
            <Route path='/' element={<Home />} />
            <Route path='/women' element={<Women addToCart={addToCart} />} />
            <Route path='/beauty' element={<Beauty addToCart={addToCart} />} />
            <Route path='/kids' element={<Kids addToCart={addToCart} />} />
            <Route path='/cart' element={<Cart removeFromCart={removeFromCart} cart={cart} />} />
            <Route path='/login' element={<Login onLogin={handleLogin} />} />
            <Route path='/signup' element={<Signup onSignup={handleSignup} />} />
            <Route path='/help' element={<Help />} />
            <Route path='/search' element={<Search addToCart={addToCart} />} />
            <Route path='/address-form' element={<AddressForm placeOrder={(address) => handlePlaceOrder(address, cart)} />} />
            <Route path='/order-summary' element={<OrderSummary selectedProducts={selectedProducts} selectedAddress={selectedAddress} />} />
          </Routes>
          <Modal show={showModal} handleClose={handleClose}>
            <h2>Please Login or Signup</h2>
            <Login onLogin={handleLogin} />
            <Signup onSignup={handleSignup} />
          </Modal>
        </div>
      </Router>
    </div>
  );
}

export default App;

