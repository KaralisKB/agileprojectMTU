import React, { useContext, useState } from "react";
import { StallContext } from "../../contexts/StallContext";
import "./ManageStalls.css";

const ManageStalls = () => {
  const {
    stalls,
    updateStall,
    deleteStall,
    stallRequests,
    addStall,
    removeStallRequest,
  } = useContext(StallContext);

  const [newStall, setNewStall] = useState({
    number: "",
    size: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStall((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStall = () => {
    if (newStall.number && newStall.size && newStall.location) {
      addStall({ ...newStall, id: Date.now(), assigned: false });
      setNewStall({ number: "", size: "", location: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  const approveRequest = (requestId) => {
    const requestToApprove = stallRequests.find(
      (request) => request.id === requestId
    );
    if (requestToApprove) {
      updateStall(requestToApprove.stallId, {
        assigned: true,
        exhibitor: requestToApprove.exhibitor,
      });
      removeStallRequest(requestId);
    }
  };

  const declineRequest = (requestId) => {
    removeStallRequest(requestId);
  };

  return (
    <div className="manage-stalls-container">
      <h1>Manage Stalls</h1>

      <div className="add-stall-form">
        <h2>Add New Stall</h2>
        <input
          type="text"
          name="number"
          value={newStall.number}
          placeholder="Stall Number"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="size"
          value={newStall.size}
          placeholder="Size"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          value={newStall.location}
          placeholder="Location"
          onChange={handleInputChange}
        />
        <button onClick={handleAddStall}>Add Stall</button>
      </div>

      <h2>Stall Booking Requests</h2>
      {stallRequests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <ul>
          {stallRequests.map((request) => (
            <li key={request.id}>
              <strong>Stall {request.stallNumber}</strong> requested by{" "}
              <strong>{request.exhibitor.name}</strong>
              <button onClick={() => approveRequest(request.id)}>Approve</button>
              <button onClick={() => declineRequest(request.id)}>Decline</button>
            </li>
          ))}
        </ul>
      )}

      <h2>All Stalls</h2>
      {stalls.length === 0 ? (
        <p>No stalls available.</p>
      ) : (
        <ul>
          {stalls.map((stall) => (
            <li key={stall.id}>
              <strong>Stall {stall.number}</strong> - {stall.size} - {stall.location} -{" "}
              {stall.assigned
                ? `Assigned to ${stall.exhibitor?.name || "Unknown"}`
                : "Available"}
              <button onClick={() => deleteStall(stall.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageStalls;
