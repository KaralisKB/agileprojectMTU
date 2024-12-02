import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [userInput, setUserInput] = useState(""); // User's query
  const [chatHistory, setChatHistory] = useState(""); // Chat context (conversation history)
  const [chatbotResponse, setChatbotResponse] = useState(""); // Latest chatbot response
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message

  const handleChatSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      alert("Please enter a message.");
      return;
    }

    setLoading(true);
    setError("");

    // Prepare request body
    const requestBody = {
      context: chatHistory,
      message: userInput,
    };

    try {
      const response = await fetch("https://apibookfair.danielefarriciello.dev/api/v1/chat-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data.choices?.[0]?.message?.content || "No response from chatbot.";
        setChatbotResponse(aiResponse);
        setChatHistory((prev) => `${prev}\nUser: ${userInput}\nAI: ${aiResponse}`);
        setUserInput(""); // Clear input field
      } else {
        const errorMessage = `Failed to fetch response: ${response.status}`;
        setError(errorMessage);
        console.error(errorMessage);
      }
    } catch (err) {
      const errorMessage = "An error occurred while communicating with the chatbot.";
      setError(errorMessage);
      console.error(errorMessage, err);
    } finally {
      setLoading(false);
    }
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

        {/* Chatbot Section */}
        <div className="chatbot-section">
          <h3>Chatbot</h3>
          <form onSubmit={handleChatSubmit} className="chatbot-form">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-submit" disabled={loading}>
              {loading ? "Loading..." : "Send"}
            </button>
          </form>
          {chatbotResponse && (
            <div className="chatbot-response">
              <strong>AI:</strong> {chatbotResponse}
            </div>
          )}
          {error && (
            <div className="chatbot-error">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>

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
