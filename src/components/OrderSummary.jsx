// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderSummary.css';

// const OrderSummary = () => {
//   const { state } = useLocation();
//   const { selectedProducts, selectedAddress, deliveryDate } = state;
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [paymentDetails, setPaymentDetails] = useState({});

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails({ ...paymentDetails, [name]: value });
//   };

//   const handleConfirmOrder = () => {
//     alert('Order is confirmed');
//   };

//   return (
//     <div className="order-summary">
//       <h2>Order Summary</h2>
//       <div className="order-products">
//         <h3>Selected Products</h3>
//         <ul>
//           {selectedProducts.map((product, index) => (
//             <li key={index} className="order-product-item">
//               <img src={product.image} alt={`Product ${product.id}`} className="order-product-image" />
//               <div className="order-product-details">
//                 <span className="order-product-name">{product.name}</span>
//                 <span className="order-product-price">{product.price}</span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="order-address">
//         <h3>Delivery Address</h3>
//         <p>{selectedAddress.name}, {selectedAddress.mobile}</p>
//         <p>{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.pinCode}</p>
//         <p>Expected Delivery Date: {deliveryDate}</p>
//       </div>
//       <div className="order-payment">
//         <h3>Payment Method</h3>
//         <select value={paymentMethod} onChange={handlePaymentMethodChange}>
//           <option value="">Select Payment Method</option>
//           <option value="cod">Cash on Delivery</option>
//           <option value="credit-card">Credit Card</option>
//           <option value="debit-card">Debit Card</option>
//           <option value="upi">UPI Payment</option>
//           <option value="net-banking">Net Banking</option>
//         </select>
//         {paymentMethod === 'credit-card' || paymentMethod === 'debit-card' ? (
//           <div className="payment-details">
//             <input
//               type="text"
//               name="cardNumber"
//               placeholder="Card Number"
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="cvv"
//               placeholder="CVV"
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="expiryDate"
//               placeholder="Expiry Date (MM/YY)"
//               onChange={handleInputChange}
//               required
//             />
//             <button onClick={handleConfirmOrder}>Submit Details</button>
//           </div>
//         ) : paymentMethod === 'upi' ? (
//           <div className="payment-details">
//             <input
//               type="password"
//               name="upiPin"
//               placeholder="Enter UPI Pin"
//               onChange={handleInputChange}
//               required
//             />
//             <button onClick={handleConfirmOrder}>Confirm Pin</button>
//           </div>
//         ) : paymentMethod === 'net-banking' ? (
//           <div className="payment-details">
//             <input
//               type="text"
//               name="bankId"
//               placeholder="Bank ID"
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleInputChange}
//               required
//             />
//             <button onClick={handleConfirmOrder}>Submit Details</button>
//           </div>
//         ) : paymentMethod === 'cod' && (
//           <button onClick={handleConfirmOrder}>Confirm Order</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { selectedProducts = [], selectedAddress = {}, deliveryDate = '' } = state || {};
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({});

  if (!state) {
    return <div>No order details available.</div>;
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleConfirmOrder = () => {
    alert('Order is confirmed');
    navigate('/'); // Navigate to home or another page after confirming order
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="order-products">
        <h3>Selected Products</h3>
        <ul>
          {selectedProducts.map((product, index) => (
            <li key={index} className="order-product-item">
              <img src={product.image} alt={`Product ${product.id}`} className="order-product-image" />
              <div className="order-product-details">
                <span className="order-product-name">{product.name}</span>
                <span className="order-product-price">{product.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-address">
        <h3>Delivery Address</h3>
        <p>{selectedAddress.name}, {selectedAddress.mobile}</p>
        <p>{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.pinCode}</p>
        <p>Expected Delivery Date: {deliveryDate}</p>
      </div>
      <div className="order-payment">
        <h3>Payment Method</h3>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Select Payment Method</option>
          <option value="cod">Cash on Delivery</option>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="upi">UPI Payment</option>
          <option value="net-banking">Net Banking</option>
        </select>
        {paymentMethod === 'credit-card' || paymentMethod === 'debit-card' ? (
          <div className="payment-details">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              onChange={handleInputChange}
              required
            />
            <button onClick={handleConfirmOrder}>Submit Details</button>
          </div>
        ) : paymentMethod === 'upi' ? (
          <div className="payment-details">
            <input
              type="password"
              name="upiPin"
              placeholder="Enter UPI Pin"
              onChange={handleInputChange}
              required
            />
            <button onClick={handleConfirmOrder}>Confirm Pin</button>
          </div>
        ) : paymentMethod === 'net-banking' ? (
          <div className="payment-details">
            <input
              type="text"
              name="bankId"
              placeholder="Bank ID"
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
            <button onClick={handleConfirmOrder}>Submit Details</button>
          </div>
        ) : paymentMethod === 'cod' && (
          <button onClick={handleConfirmOrder}>Confirm Order</button>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;

