import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [userMessage, setUserMessage] = useState(""); // Store user input
  const [chatbotResponse, setChatbotResponse] = useState(""); // Store chatbot's response

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const sendMessageToChatbot = async () => {
    if (!userMessage.trim()) {
      alert("Please enter a message.");
      return;
    }

    try {
      const response = await fetch(
        "https://apibookfair.danielefarriciello.dev/api/v1/chat-bot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }), // Send user input
        }
      );

      if (response.ok) {
        const data = await response.json();
        setChatbotResponse(data.response || "No response from chatbot.");
      } else {
        setChatbotResponse("Failed to connect to chatbot.");
      }
    } catch (error) {
      console.error("Error fetching chatbot API:", error);
      setChatbotResponse("An error occurred while connecting to chatbot.");
    }

    setUserMessage(""); // Clear input after sending
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h3>Stay Updated!</h3>
          <p>Sign up for our newsletter to receive the latest updates on the book fair.</p>
          <div className="footer-newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

        <button className="chatbot-button" onClick={toggleChatbot}>
          {chatbotVisible ? "Close Chatbot" : "Open Chatbot"}
        </button>

        {chatbotVisible && (
          <div className="chatbot-container">
            <h4>Chatbot</h4>
            <div>
              <input
                type="text"
                value={userMessage}
                placeholder="Type your message..."
                onChange={(e) => setUserMessage(e.target.value)} // Update user input
              />
              <button onClick={sendMessageToChatbot}>Send</button>
            </div>
            {chatbotResponse && <p>Response: {chatbotResponse}</p>}
          </div>
        )}

        <p className="footer-text">
          Follow us on social media for updates and news!
          <br />
          © 2024 International Book Fair. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-newsletter">
//           <h3>Stay Updated!</h3>
//           <p>Sign up for our newsletter to receive the latest updates on the book fair.</p>
//           <div className="footer-newsletter-form">
//             <input type="email" placeholder="Enter your email" />
//             <button type="submit">Subscribe</button>
//           </div>
//         </div>
//         <p className="footer-text">
//           Follow us on social media for updates and news!
//           <br />
//           © 2024 International Book Fair. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
