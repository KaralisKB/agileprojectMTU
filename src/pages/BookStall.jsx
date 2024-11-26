import React, { useState, useContext } from "react";
import { StallContext } from "../contexts/StallContext";
import "./BookStall.css";

const BookStall = () => {
  const { stalls, addStallRequest } = useContext(StallContext);
  const [selectedStall, setSelectedStall] = useState(null);
  const [exhibitorName, setExhibitorName] = useState(""); // Field for exhibitor name

  // Filter available stalls
  const availableStalls = stalls.filter((stall) => !stall.assigned);

  // Handle stall request
  const handleRequestStall = () => {
    if (selectedStall && exhibitorName) {
      addStallRequest({
        stallId: selectedStall.id,
        stallNumber: selectedStall.number,
        exhibitor: { name: exhibitorName, id: Date.now() }, // Store exhibitor name
      });
      alert(`Request submitted for Stall ${selectedStall.number}`);
      setSelectedStall(null); // Reset selected stall
      setExhibitorName(""); // Reset exhibitor name
    } else {
      alert("Please select a stall and enter your name to proceed.");
    }
  };

  return (
    <div className="exhibitor-stall-booking-container">
      <h1>Book a Stall</h1>

      {/* Available Stalls List */}
      <h2>Available Stalls</h2>
      {availableStalls.length === 0 ? (
        <p>No stalls available at the moment.</p>
      ) : (
        <ul>
          {availableStalls.map((stall) => (
            <li key={stall.id}>
              <strong>Stall {stall.number}</strong> - {stall.size} - {stall.location}
              <button onClick={() => setSelectedStall(stall)}>Select</button>
            </li>
          ))}
        </ul>
      )}

      {/* Stall Selection */}
      {selectedStall && (
        <div className="selected-stall">
          <h3>Selected Stall</h3>
          <p>
            <strong>Stall {selectedStall.number}</strong> - {selectedStall.size} -{" "}
            {selectedStall.location}
          </p>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={exhibitorName}
            onChange={(e) => setExhibitorName(e.target.value)}
          />
          <button onClick={handleRequestStall}>Request Stall</button>
        </div>
      )}
    </div>
  );
};

export default BookStall;
