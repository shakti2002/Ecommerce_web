// import React, { useState } from 'react';
// import axios from 'axios';
// import './Help.css';

// const Help = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [showChat, setShowChat] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/queries', formData);
//       alert('Query submitted successfully');
//     } catch (error) {
//       console.error('Error submitting query', error);
//       alert('Failed to submit query');
//     }
//   };

//   const handleChatToggle = () => {
//     setShowChat(!showChat);
//   };

//   return (
//     <div className="help-page">
//       <div className="faq-container">
//         <h1>Frequently Asked Questions</h1>
//         <div className="faq-section">
//           {["How much time to deliver my product?", "Can I replace my product?", "I have created a Return request. When will I get the refund?", "How do I cancel the order I have placed?"].map((question, index) => (
//             <div className="faq-item" key={index}>
//               <details>
//                 <summary>{index + 1}. {question}</summary>
//                 <p>
//                   {index === 0 && "Generally, it takes 2-3 days after the shipment."}
//                   {index === 1 && "Yes, you can replace the product under return policy until its tag is not removed."}
//                   {index === 2 && "Refund will be initiated upon successful pickup as per the Returns Policy. The refund amount is expected to reflect in the customer account within the following timelines:"}
//                   {index === 3 && "Order can be canceled till the same is out for delivery. Note: This may not be applicable for certain logistics partners. You would see an option to cancel within 'My Orders' section under the main menu of your App/Website/M-site then select the item or order you want to cancel. In case you are unable to cancel the order from 'My Orders' section, you can refuse it at the time of delivery and refund will be processed into the source account if the order amount was paid online."}
//                 </p>
//               </details>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="query-form">
//         <h2>Submit a Query</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//           <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <button className="chat-button" onClick={handleChatToggle}>Chat with us</button>
//       {showChat && <Chatbot/>}
//     </div>
//   );
// };

// const Chatbot = () => {
//     const [messages, setmessages]=useState([]);
//     const [input, setinput]=useState('');


// const handleSend= async()=> {
//    if (!input.trim()) return;

//    const usermessage= { sender: 'user', test: input}
//    setmessages([...messages, usermessage])
//    try {
//     const response = await axios.post('http://127.0.0.1:5000/chatbot', {message: input});
//     console.log("input ", input)
//     const ans={sender: 'bot', test: response.data.response}
//     console.log("output ", response.data.response)
//     setmessages([...messages, usermessage, ans])
//    }
//    catch (error){
//     console.error(error)
//    }
//    setinput('')
// };

//   return (
    
// <div className="chatbot">
//       <div className="chat-window">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat-message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setinput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           placeholder="Type a message..."
//         />
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Help;





// src/components/HelpPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './Help.css';

const Help = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showChat, setShowChat] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/form', formData);
      alert('Query submitted successfully');
    } catch (error) {
      console.error('Error submitting query', error);
      alert('Failed to submit query');
    }
  };

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="help-page">
      <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
        <div className="faq-section">
          {["How much time to deliver my product?", "Can I replace my product?", "I have created a Return request. When will I get the refund?", "How do I cancel the order I have placed?"].map((question, index) => (
            <div className="faq-item" key={index}>
              <details>
                <summary>{index + 1}. {question}</summary>
                <p>
                  {index === 0 && "Generally, it takes 2-3 days after the shipment."}
                  {index === 1 && "Yes, you can replace the product under return policy until its tag is not removed."}
                  {index === 2 && "Refund will be initiated upon successful pickup as per the Returns Policy. The refund amount is expected to reflect in the customer account within the following timelines:"}
                  {index === 3 && "Order can be canceled till the same is out for delivery. Note: This may not be applicable for certain logistics partners. You would see an option to cancel within 'My Orders' section under the main menu of your App/Website/M-site then select the item or order you want to cancel. In case you are unable to cancel the order from 'My Orders' section, you can refuse it at the time of delivery and refund will be processed into the source account if the order amount was paid online."}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
      <div className="query-form">
        <h2>Submit a Query</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button className="chat-button" onClick={handleChatToggle}>Chat with us</button>
      {showChat && <Chatbot />}
    </div>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/chatbot', { message: input });
      const botMessage = { sender: 'bot', text: response.data.response };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message to chatbot', error);
    }

    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Help;
