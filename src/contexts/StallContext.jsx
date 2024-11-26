import React, { createContext, useState, useEffect } from "react";

export const StallContext = createContext();

export const StallProvider = ({ children }) => {
  const [stalls, setStalls] = useState(() => {
    // Load stalls from localStorage on initial load
    const storedStalls = localStorage.getItem("stalls");
    return storedStalls ? JSON.parse(storedStalls) : [];
  });

  const [stallRequests, setStallRequests] = useState(() => {
    // Load stall requests from localStorage on initial load
    const storedRequests = localStorage.getItem("stallRequests");
    return storedRequests ? JSON.parse(storedRequests) : [];
  });

  // Save `stalls` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("stalls", JSON.stringify(stalls));
  }, [stalls]);

  // Save `stallRequests` to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("stallRequests", JSON.stringify(stallRequests));
  }, [stallRequests]);

  // Add a new stall
  const addStall = (stall) => {
    setStalls((prevStalls) => [...prevStalls, stall]);
  };

  // Update a stall
  const updateStall = (stallId, updatedData) => {
    setStalls((prevStalls) =>
      prevStalls.map((stall) =>
        stall.id === stallId ? { ...stall, ...updatedData } : stall
      )
    );
  };

  // Delete a stall
  const deleteStall = (stallId) => {
    setStalls((prevStalls) => prevStalls.filter((stall) => stall.id !== stallId));
  };

  // Add a stall booking request
  const addStallRequest = (request) => {
    setStallRequests((prevRequests) => [...prevRequests, { ...request, id: Date.now() }]);
  };

  // Remove a booking request
  const removeStallRequest = (requestId) => {
    setStallRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== requestId)
    );
  };

  return (
    <StallContext.Provider
      value={{
        stalls,
        stallRequests,
        addStall,
        updateStall,
        deleteStall,
        addStallRequest,
        removeStallRequest,
      }}
    >
      {children}
    </StallContext.Provider>
  );
};
