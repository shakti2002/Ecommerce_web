// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AddressForm.css';

// const AddressForm = ({ placeOrder }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [newAddress, setNewAddress] = useState({
//     name: '',
//     mobile: '',
//     street: '',
//     pinCode: '',
//     city: '',
//     state: ''
//   });
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const fetchAddresses = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/addresses');
//       setAddresses(response.data);
//     } catch (error) {
//       console.error('Error fetching addresses', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddress({ ...newAddress, [name]: value });
//   };

//   const handleAddressSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/addresses', newAddress);
//       setAddresses([...addresses, response.data]);
//       setNewAddress({
//         name: '',
//         mobile: '',
//         street: '',
//         pinCode: '',
//         city: '',
//         state: ''
//       });
//     } catch (error) {
//       console.error('Error adding address', error);
//     }
//   };

//   return (
//     <div className="address-form">
//       <h2>Select Delivery Address</h2>
//       {addresses.length > 0 ? (
//         <ul className="saved-addresses">
//           {addresses.map((address, index) => (
//             <li key={index} className={`address-item ${selectedAddress === index ? 'selected' : ''}`}>
//               <p>{address.name}, {address.mobile}</p>
//               <p>{address.street}, {address.city}, {address.state}, {address.pinCode}</p>
//               <button onClick={() => setSelectedAddress(index)}>Deliver to this Address</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No saved addresses found.</p>
//       )}
//       <h3>Add New Address</h3>
//       <form onSubmit={handleAddressSubmit} className="new-address-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newAddress.name}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="mobile"
//           placeholder="Mobile No"
//           value={newAddress.mobile}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="street"
//           placeholder="Street Name"
//           value={newAddress.street}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="pinCode"
//           placeholder="Pin Code"
//           value={newAddress.pinCode}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={newAddress.city}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={newAddress.state}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Add Address</button>
//       </form>
//       <button
//         onClick={() => placeOrder(selectedAddress)}
//         disabled={selectedAddress === null}
//         className="place-order"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default AddressForm;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddressForm.css';

const AddressForm = ({ placeOrder }) => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: '',
    mobile: '',
    street: '',
    pinCode: '',
    city: '',
    state: ''
  });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get('https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/api/addresses');
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/api/addresses', newAddress);
      setAddresses([...addresses, response.data]);
      setNewAddress({
        name: '',
        mobile: '',
        street: '',
        pinCode: '',
        city: '',
        state: ''
      });
    } catch (error) {
      console.error('Error adding address', error);
    }
  };

  const handlePlaceOrder = () => {
    navigate('/order-summary', { state: { selectedAddress: addresses[selectedAddress], deliveryDate: getDeliveryDate() } });
  };

  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString();
  };

  return (
    <div className="address-form">
      <h2>Select Delivery Address</h2>
      {addresses.length > 0 ? (
        <ul className="saved-addresses">
          {addresses.map((address, index) => (
            <li key={index} className={`address-item ${selectedAddress === index ? 'selected' : ''}`}>
              <p>{address.name}, {address.mobile}</p>
              <p>{address.street}, {address.city}, {address.state}, {address.pinCode}</p>
              <button onClick={() => setSelectedAddress(index)}>Deliver to this Address</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved addresses found.</p>
      )}
      <h3>Add New Address</h3>
      <form onSubmit={handleAddressSubmit} className="new-address-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newAddress.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No"
          value={newAddress.mobile}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street Name"
          value={newAddress.street}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="pinCode"
          placeholder="Pin Code"
          value={newAddress.pinCode}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={newAddress.city}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={newAddress.state}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Address</button>
      </form>
      <button
        onClick={handlePlaceOrder}
        disabled={selectedAddress === null}
        className="place-order"
      >
        Place Order
      </button>
    </div>
  );
};

export default AddressForm;



