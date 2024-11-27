import React, { useContext } from "react";
import { ExhibitorContext } from "../contexts/ExhibitorContext";
import "./ManageExhibitors.css";

const ManageExhibitors = () => {
  const { exhibitors, pendingExhibitors, approveExhibitor, declineExhibitor, deleteExhibitor } =
    useContext(ExhibitorContext);

  return (
    <div className="exhibitor-management-container">
      <h1>Manage Exhibitors</h1>

      {/* Pending Exhibitors */}
      <div className="pending-exhibitors">
        <h2>Pending Exhibitors</h2>
        {pendingExhibitors.length === 0 ? (
          <p>No pending exhibitors.</p>
        ) : (
          <ul>
            {pendingExhibitors.map((exhibitor) => (
              <li key={exhibitor.id} className="exhibitor-item">
                <strong>{exhibitor.name}</strong> - {exhibitor.category} -{" "}
                {exhibitor.contact}
                <button
                  className="approve-button"
                  onClick={() => {
                    console.log("Approving:", exhibitor.id);
                    approveExhibitor(exhibitor.id);
                  }}
                >
                  Approve
                </button>
                <button
                  className="decline-button"
                  onClick={() => {
                    console.log("Declining:", exhibitor.id);
                    declineExhibitor(exhibitor.id);
                  }}
                >
                  Decline
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Approved Exhibitors */}
      <div className="approved-exhibitors">
        <h2>Approved Exhibitors</h2>
        {exhibitors.length === 0 ? (
          <p>No approved exhibitors.</p>
        ) : (
          <ul>
            {exhibitors.map((exhibitor) => (
              <li key={exhibitor.id} className="exhibitor-item">
                <strong>{exhibitor.name}</strong> - {exhibitor.category} -{" "}
                {exhibitor.contact}
                <button
                  className="delete-button"
                  onClick={() => deleteExhibitor(exhibitor.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageExhibitors;



// import React, { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

// export const ExhibitorContext = createContext();

// export const ExhibitorProvider = ({ children }) => {
//   // Load initial data from localStorage
//   const [exhibitors, setExhibitors] = useState(() => {
//     try {
//       const savedExhibitors = localStorage.getItem("approvedExhibitors");
//       return savedExhibitors ? JSON.parse(savedExhibitors) : [];
//     } catch {
//       return [];
//     }
//   });

//   const [pendingExhibitors, setPendingExhibitors] = useState(() => {
//     try {
//       const savedPending = localStorage.getItem("pendingExhibitors");
//       return savedPending ? JSON.parse(savedPending) : [];
//     } catch {
//       return [];
//     }
//   });

//   // Save to localStorage whenever exhibitors or pendingExhibitors change
//   useEffect(() => {
//     try {
//       localStorage.setItem("approvedExhibitors", JSON.stringify(exhibitors));
//     } catch (error) {
//       console.error("Failed to save exhibitors to localStorage:", error);
//     }
//   }, [exhibitors]);

//   useEffect(() => {
//     try {
//       localStorage.setItem("pendingExhibitors", JSON.stringify(pendingExhibitors));
//     } catch (error) {
//       console.error("Failed to save pending exhibitors to localStorage:", error);
//     }
//   }, [pendingExhibitors]);

//   // Add exhibitor to the pending list
//   const addPendingExhibitor = (exhibitor) => {
//     setPendingExhibitors((prevPending) => [
//       ...prevPending,
//       { ...exhibitor, id: uuidv4() },
//     ]);
//   };

//   // Approve a pending exhibitor
//   const approveExhibitor = (id) => {
//     const exhibitorToApprove = pendingExhibitors.find((e) => e.id === id);
//     if (exhibitorToApprove) {
//       setExhibitors((prevExhibitors) => [
//         ...prevExhibitors,
//         { ...exhibitorToApprove, status: "approved" },
//       ]);
//       setPendingExhibitors((prevPending) =>
//         prevPending.filter((e) => e.id !== id)
//       );
//     }
//   };

//   // Decline (delete) a pending exhibitor
//   const declineExhibitor = (id) => {
//     setPendingExhibitors((prevPending) =>
//       prevPending.filter((exhibitor) => exhibitor.id !== id)
//     );
//   };

//   // Delete an exhibitor from the approved list
//   const deleteExhibitor = (id) => {
//     setExhibitors((prevExhibitors) =>
//       prevExhibitors.filter((exhibitor) => exhibitor.id !== id)
//     );
//   };

//   // Additional functionalities
//   const filterExhibitorsByCategory = (category) => {
//     return exhibitors.filter((exhibitor) => exhibitor.category === category);
//   };

//   const searchExhibitorsByName = (name) => {
//     return exhibitors.filter((exhibitor) =>
//       exhibitor.name.toLowerCase().includes(name.toLowerCase())
//     );
//   };

//   return (
//     <ExhibitorContext.Provider
//       value={{
//         exhibitors,
//         pendingExhibitors,
//         addPendingExhibitor,
//         approveExhibitor,
//         declineExhibitor,
//         deleteExhibitor,
//         filterExhibitorsByCategory,
//         searchExhibitorsByName,
//       }}
//     >
//       {children}
//     </ExhibitorContext.Provider>
//   );
// };
