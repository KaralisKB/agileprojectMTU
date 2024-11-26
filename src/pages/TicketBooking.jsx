import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./TicketBooking.css";

const TicketBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adultTickets: 0,
    childTickets: 0,
    morningTickets: 0,
    creditCard: "",
    expiryDate: "",
    cvv: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const ticketPrices = {
    adultTickets: 5,
    childTickets: 3,
    morningTickets: 3,
  };

  const calculateTotalPrice = () => {
    const { adultTickets, childTickets, morningTickets } = formData;
    return (
      adultTickets * ticketPrices.adultTickets +
      childTickets * ticketPrices.childTickets +
      morningTickets * ticketPrices.morningTickets
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name.includes("Tickets") ? parseInt(value, 10) || 0 : value,
    });
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    // Calculate total price
    const totalPrice = calculateTotalPrice();

    // Prepare the email template parameters
    const emailParams = {
      to_name: formData.name,            // Matches {{to_name}}
      from_name: "Book Fair Team",       // Matches {{from_name}}
      reply_to: formData.email,          // Matches {{reply_to}}
      phone: formData.phone,             // Matches {{phone}}
      adult_tickets: formData.adultTickets, // Matches {{adult_tickets}}
      child_tickets: formData.childTickets, // Matches {{child_tickets}}
      morning_tickets: formData.morningTickets, // Matches {{morning_tickets}}
      total_price: totalPrice            // Matches {{total_price}}
    };
    

    // Send the email using EmailJS
    emailjs
      .send(
        "service_37yphzp", // Replace with your Service ID
        "template_xqt65it", // Replace with your Template ID
        emailParams, // Parameters matching placeholders in the template
        "mGNlosJ3yb5Y5ysXJ" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("Email successfully sent:", response);
          setShowPopup(true); // Show popup on success
        },
        (error) => {
          console.error("Email failed to send:", error);
          alert("Failed to send confirmation email. Please check your setup.");
        }
      );

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      adultTickets: 0,
      childTickets: 0,
      morningTickets: 0,
      creditCard: "",
      expiryDate: "",
      cvv: "",
    });
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="ticket-booking-container">
      <h2 className="ticket-booking-title">Book Your Tickets</h2>
      <form className="ticket-booking-form" onSubmit={handleConfirmBooking}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="adultTickets">Adult Tickets (€5):</label>
        <input
          type="number"
          id="adultTickets"
          name="adultTickets"
          value={formData.adultTickets}
          onChange={handleInputChange}
          min="0"
        />

        <label htmlFor="childTickets">Child Tickets (€3):</label>
        <input
          type="number"
          id="childTickets"
          name="childTickets"
          value={formData.childTickets}
          onChange={handleInputChange}
          min="0"
        />

        <label htmlFor="morningTickets">Morning Admission Tickets (€3):</label>
        <input
          type="number"
          id="morningTickets"
          name="morningTickets"
          value={formData.morningTickets}
          onChange={handleInputChange}
          min="0"
        />

        <label htmlFor="creditCard">Credit Card Number:</label>
        <input
          type="text"
          id="creditCard"
          name="creditCard"
          placeholder="Enter your credit card number"
          value={formData.creditCard}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          placeholder="MM/YY"
          value={formData.expiryDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          placeholder="Enter CVV"
          value={formData.cvv}
          onChange={handleInputChange}
          required
        />

        <p className="ticket-total-price">Total Price: €{calculateTotalPrice()}</p>

        <button type="submit" className="confirm-booking-button">
          Confirm Booking
        </button>
      </form>

      {/* Popup Confirmation */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <h3>Your Booking Has Been Confirmed!</h3>
            <p>Tickets are available at your email!</p>
            <p>See you there!</p>
            <button className="popup-close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBooking;
