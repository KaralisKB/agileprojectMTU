import React, { useState } from "react";
import emailjs from "emailjs-com"; 
import "./TicketBooking.css";

const TicketBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
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
    const totalPrice = calculateTotalPrice();

    const emailParams = {
      to_name: formData.name,
      from_name: "Book Fair Team",
      reply_to: formData.email,
      phone: formData.phone,
      date: formData.date,
      adult_tickets: formData.adultTickets,
      child_tickets: formData.childTickets,
      morning_tickets: formData.morningTickets,
      total_price: totalPrice,
    };

    emailjs
      .send(
        "service_37yphzp",
        "template_xqt65it", 
        emailParams,
        "mGNlosJ3yb5Y5ysXJ"
      )
      .then(
        (response) => {
          console.log("Email successfully sent:", response);
          setShowPopup(true); 
        },
        (error) => {
          console.error("Email failed to send:", error);
          alert("Failed to send confirmation email. Please check your setup.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
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
    {/* Personal Information Section */}
    <hr className="section-divider" data-title="Personal Information" />
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

    {/* Booking Details Section */}
    <hr className="section-divider" data-title="Booking Details" />
    <label htmlFor="date">Select Date:</label>
    <select
      id="date"
      name="date"
      value={formData.date}
      onChange={handleInputChange}
      required
    >
      <option value="">-- Select a date --</option>
      <option value="18th July">18th July</option>
      <option value="19th July">19th July</option>
      <option value="20th July">20th July</option>
      <option value="21st July">21st July</option>
      <option value="22nd July">22nd July</option>
    </select>
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

    {/* Payment Details Section */}
    <hr className="section-divider" data-title="Payment Details" />
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

    {/* Total Price and Submit */}
    <p className="ticket-total-price">Total Price: €{calculateTotalPrice()}</p>
    <button type="submit" className="confirm-booking-button">
      Confirm Booking
    </button>
  </form>

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
