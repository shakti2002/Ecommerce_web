// import React, { useState, useEffect } from 'react';
// import './Cart.css';

// const Cart = ({ cart, removeFromCart, placeOrder }) => {
//   const [quantities, setQuantities] = useState(cart.map(() => 1));
//   const [selectedItems, setSelectedItems] = useState(cart.map(() => false));

//   useEffect(() => {
//     setQuantities(cart.map(() => 1));
//     setSelectedItems(cart.map(() => false));
//   }, [cart]);

//   const incrementQuantity = (index) => {
//     setQuantities(quantities.map((qty, i) => (i === index ? qty + 1 : qty)));
//   };

//   const decrementQuantity = (index) => {
//     setQuantities(
//       quantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
//     );
//   };

//   const handleSelectItem = (index) => {
//     setSelectedItems(
//       selectedItems.map((selected, i) => (i === index ? !selected : selected))
//     );
//   };

//   const getDeliveryDate = () => {
//     const date = new Date();
//     date.setDate(date.getDate() + 5);
//     return date.toLocaleDateString();
//   };

//   const extractPrice = (price) => {
//     return parseFloat(price.replace(/[^0-9.-]+/g, ""));
//   };

//   const calculateTotalCost = () => {
//     return cart.reduce((total, item, index) => {
//       if (selectedItems[index]) {
//         return total + extractPrice(item.price) * quantities[index];
//       }
//       return total;
//     }, 0);
//   };

//   const totalCost = calculateTotalCost();
//   const selectedCount = selectedItems.filter(selected => selected).length;

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <p>Selected Items: {selectedCount}</p>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <input
//                   type="checkbox"
//                   checked={selectedItems[index]}
//                   onChange={() => handleSelectItem(index)}
//                   className="select-item"
//                 />
//                 <img src={item.image} alt={`Product ${item.id}`} className="cart-image" />
//                 <div className="cart-details">
//                   <span className="cart-name">{item.name}</span>
//                   <span className="cart-price">{item.price}</span>
//                   <span className="cart-delivery">Delivery by: {getDeliveryDate()}</span>
//                   <div className="cart-quantity">
//                     <button onClick={() => decrementQuantity(index)} className="quantity-button">-</button>
//                     <span>{quantities[index]}</span>
//                     <button onClick={() => incrementQuantity(index)} className="quantity-button">+</button>
//                   </div>
//                   <button onClick={() => removeFromCart(index)} className="remove-from-cart">Remove</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="cart-summary">
//             <div className="summary-details">
//               <p>Product Cost: ₹{totalCost.toFixed(2)}</p>
//               <p>Delivery Charge: FREE</p>
//               <h3>Total Cost: ₹{totalCost.toFixed(2)}</h3>
//             </div>
//             <button
//               onClick={() => placeOrder(selectedItems, quantities)}
//               className="place-order"
//               disabled={totalCost === 0}
//             >
//               Place Order
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, removeFromCart, placeOrder }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [selectedItems, setSelectedItems] = useState(cart.map(() => false));
  const navigate = useNavigate();

  useEffect(() => {
    setQuantities(cart.map(() => 1));
    setSelectedItems(cart.map(() => false));
  }, [cart]);

  const incrementQuantity = (index) => {
    setQuantities(quantities.map((qty, i) => (i === index ? qty + 1 : qty)));
  };

  const decrementQuantity = (index) => {
    setQuantities(
      quantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  const handleSelectItem = (index) => {
    setSelectedItems(
      selectedItems.map((selected, i) => (i === index ? !selected : selected))
    );
  };

  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString();
  };

  const extractPrice = (price) => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, item, index) => {
      if (selectedItems[index]) {
        return total + extractPrice(item.price) * quantities[index];
      }
      return total;
    }, 0);
  };

  const totalCost = calculateTotalCost();
  const selectedCount = selectedItems.filter(selected => selected).length;

  const handlePlaceOrder = () => {
    navigate('/address-form');
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Selected Items: {selectedCount}</p>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <input
                  type="checkbox"
                  checked={selectedItems[index]}
                  onChange={() => handleSelectItem(index)}
                  className="select-item"
                />
                <img src={item.image} alt={`Product ${item.id}`} className="cart-image" />
                <div className="cart-details">
                  <span className="cart-name">{item.name}</span>
                  <span className="cart-price">{item.price}</span>
                  <span className="cart-delivery">Delivery by: {getDeliveryDate()}</span>
                  <div className="cart-quantity">
                    <button onClick={() => decrementQuantity(index)} className="quantity-button">-</button>
                    <span>{quantities[index]}</span>
                    <button onClick={() => incrementQuantity(index)} className="quantity-button">+</button>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="remove-from-cart">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <div className="summary-details">
              <p>Product Cost: ₹{totalCost.toFixed(2)}</p>
              <p>Delivery Charge: FREE</p>
              <h3>Total Cost: ₹{totalCost.toFixed(2)}</h3>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="place-order"
              disabled={totalCost === 0}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

