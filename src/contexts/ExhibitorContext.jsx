import React, { createContext, useState, useEffect } from "react";

export const ExhibitorContext = createContext();

export const ExhibitorProvider = ({ children }) => {
  // Load initial data from localStorage
  const [exhibitors, setExhibitors] = useState(() => {
    const savedExhibitors = localStorage.getItem("approvedExhibitors");
    return savedExhibitors ? JSON.parse(savedExhibitors) : [];
  });

  const [pendingExhibitors, setPendingExhibitors] = useState(() => {
    const savedPending = localStorage.getItem("pendingExhibitors");
    return savedPending ? JSON.parse(savedPending) : [];
  });

  // Save to localStorage whenever exhibitors or pendingExhibitors change
  useEffect(() => {
    localStorage.setItem("approvedExhibitors", JSON.stringify(exhibitors));
  }, [exhibitors]);

  useEffect(() => {
    localStorage.setItem("pendingExhibitors", JSON.stringify(pendingExhibitors));
  }, [pendingExhibitors]);

  // Add exhibitor to the pending list
  const addPendingExhibitor = (exhibitor) => {
    setPendingExhibitors((prevPending) => [
      ...prevPending,
      { ...exhibitor, id: Date.now() },
    ]);
  };

  // Approve a pending exhibitor
  const approveExhibitor = (id) => {
    const exhibitorToApprove = pendingExhibitors.find((e) => e.id === id);
    if (exhibitorToApprove) {
      setExhibitors((prevExhibitors) => [
        ...prevExhibitors,
        { ...exhibitorToApprove, status: "approved" },
      ]);
      setPendingExhibitors((prevPending) =>
        prevPending.filter((e) => e.id !== id)
      );
    }
  };

  // Decline (delete) a pending exhibitor
  const declineExhibitor = (id) => {
    setPendingExhibitors((prevPending) =>
      prevPending.filter((exhibitor) => exhibitor.id !== id)
    );
  };

  // Delete an exhibitor from the approved list
  const deleteExhibitor = (id) => {
    setExhibitors((prevExhibitors) =>
      prevExhibitors.filter((exhibitor) => exhibitor.id !== id)
    );
  };

  return (
    <ExhibitorContext.Provider
      value={{
        exhibitors,
        pendingExhibitors,
        addPendingExhibitor,
        approveExhibitor,
        declineExhibitor,
        deleteExhibitor,
      }}
    >
      {children}
    </ExhibitorContext.Provider>
  );
};
