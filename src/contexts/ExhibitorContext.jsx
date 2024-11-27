import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ExhibitorContext = createContext();

export const ExhibitorProvider = ({ children }) => {
  const [exhibitors, setExhibitors] = useState(() => {
    try {
      const savedExhibitors = localStorage.getItem("approvedExhibitors");
      return savedExhibitors ? JSON.parse(savedExhibitors) : [];
    } catch {
      return [];
    }
  });

  const [pendingExhibitors, setPendingExhibitors] = useState(() => {
    try {
      const savedPending = localStorage.getItem("pendingExhibitors");
      return savedPending ? JSON.parse(savedPending) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("approvedExhibitors", JSON.stringify(exhibitors));
    } catch (error) {
      console.error("Failed to save exhibitors to localStorage:", error);
    }
  }, [exhibitors]);

  useEffect(() => {
    try {
      localStorage.setItem("pendingExhibitors", JSON.stringify(pendingExhibitors));
    } catch (error) {
      console.error("Failed to save pending exhibitors to localStorage:", error);
    }
  }, [pendingExhibitors]);

  const addPendingExhibitor = (exhibitor) => {
    setPendingExhibitors((prevPending) => [
      ...prevPending,
      { ...exhibitor, id: uuidv4() },
    ]);
  };

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

  const declineExhibitor = (id) => {
    setPendingExhibitors((prevPending) =>
      prevPending.filter((exhibitor) => exhibitor.id !== id)
    );
  };

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
