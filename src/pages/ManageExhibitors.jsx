import React, { useContext } from "react";
import { ExhibitorContext } from "../contexts/ExhibitorContext";
import "./ManageExhibitors.css";

const ManageExhibitors = () => {
  const { exhibitors, pendingExhibitors, approveExhibitor, deleteExhibitor } =
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
            onClick={() => approveExhibitor(exhibitor.id)}
          >
            Approve
          </button>
          <button
            className="decline-button"
            onClick={() => declineExhibitor(exhibitor.id)}
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


// import React, { useContext, useState } from "react";
// import { ExhibitorContext } from "../contexts/ExhibitorContext";
// import "./ManageExhibitors.css";

// const ManageExhibitors = () => {
//   const { exhibitors, pendingExhibitors, addApprovedExhibitor, approveExhibitor, deleteExhibitor } =
//     useContext(ExhibitorContext);
//   const [newExhibitor, setNewExhibitor] = useState({
//     name: "",
//     category: "",
//     contact: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewExhibitor({ ...newExhibitor, [name]: value });
//   };

//   const handleAddExhibitor = () => {
//     if (newExhibitor.name && newExhibitor.category && newExhibitor.contact) {
//       addApprovedExhibitor({ ...newExhibitor }); // Add directly to approved
//       setNewExhibitor({ name: "", category: "", contact: "" });
//     }
//   };

//   return (
//     <div className="exhibitor-management-container">
//       <h1>Manage Exhibitors</h1>

//       {/* Add New Exhibitor */}
//       <div className="add-exhibitor-form">
//         <h2>Add New Exhibitor</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           value={newExhibitor.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           name="category"
//           value={newExhibitor.category}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           placeholder="Contact Info"
//           name="contact"
//           value={newExhibitor.contact}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAddExhibitor}>Add Exhibitor</button>
//       </div>

//       {/* Pending Exhibitors */}
//       <div className="pending-exhibitors">
//         <h2>Pending Exhibitors</h2>
//         {pendingExhibitors.length === 0 ? (
//           <p>No pending exhibitors.</p>
//         ) : (
//           <ul>
//             {pendingExhibitors.map((exhibitor) => (
//               <li key={exhibitor.id}>
//                 <strong>{exhibitor.name}</strong> - {exhibitor.category} - {exhibitor.contact}
//                 <button onClick={() => approveExhibitor(exhibitor.id)}>Approve</button>
//                 <button onClick={() => deleteExhibitor(exhibitor.id)}>Decline</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {/* Approved Exhibitors */}
//       <div className="approved-exhibitors">
//         <h2>Approved Exhibitors</h2>
//         {exhibitors.length === 0 ? (
//           <p>No approved exhibitors.</p>
//         ) : (
//           <ul>
//             {exhibitors.map((exhibitor) => (
//               <li key={exhibitor.id}>
//                 <strong>{exhibitor.name}</strong> - {exhibitor.category} - {exhibitor.contact}
//                 <button onClick={() => deleteExhibitor(exhibitor.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageExhibitors;
