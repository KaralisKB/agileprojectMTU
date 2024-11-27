import React, { useState, useContext } from "react";
import { ExhibitorContext } from "../contexts/ExhibitorContext";
import "./ExhibitorRegister.css";

const ExhibitorRegister = () => {
  const { addPendingExhibitor } = useContext(ExhibitorContext);
  const [newExhibitor, setNewExhibitor] = useState({
    name: "",
    category: "",
    contact: "",
    company: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExhibitor({ ...newExhibitor, [name]: value });
  };

  const handleRegister = () => {
    const { name, category, contact, company, cardNumber, cvv, expiry } =
      newExhibitor;

    if (name && category && contact && company && cardNumber && cvv && expiry) {
      addPendingExhibitor({ name, category, contact, company });
      setNewExhibitor({
        name: "",
        category: "",
        contact: "",
        company: "",
        cardNumber: "",
        cvv: "",
        expiry: "",
      });
      alert("Your registration is submitted and pending approval!");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="register-exhibitor-container">
      <h1>Register as an Exhibitor</h1>
      <p className="fee-info">Participation Fee: €300</p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newExhibitor.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={newExhibitor.category}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Contact Info"
        name="contact"
        value={newExhibitor.contact}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Company Name"
        name="company"
        value={newExhibitor.company}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Card Number"
        name="cardNumber"
        value={newExhibitor.cardNumber}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="CVV"
        name="cvv"
        value={newExhibitor.cvv}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Expiry Date (MM/YY)"
        name="expiry"
        value={newExhibitor.expiry}
        onChange={handleInputChange}
      />
      <button onClick={handleRegister}>Submit Registration</button>
      <p className="refund-info">
        *If registration is declined, the fee will be refunded.
      </p>
    </div>
  );
};

export default ExhibitorRegister;


// import React, { useState, useContext } from "react";
// import { ExhibitorContext } from "../contexts/ExhibitorContext";
// import "./ExhibitorRegister.css";

// const ExhibitorRegister = () => {
//   const { addPendingExhibitor } = useContext(ExhibitorContext);
//   const [newExhibitor, setNewExhibitor] = useState({
//     name: "",
//     category: "",
//     contact: "",
//     company: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewExhibitor({ ...newExhibitor, [name]: value });
//   };

//   const handleRegister = () => {
//     if (newExhibitor.name && newExhibitor.category && newExhibitor.contact && newExhibitor.company) {
//       addPendingExhibitor({ ...newExhibitor });
//       setNewExhibitor({ name: "", category: "", contact: "", company: "" });
//       alert("Your registration is submitted and pending approval!");
//     } else {
//       alert("Please fill out all fields!");
//     }
//   };

//   return (
//     <div className="register-exhibitor-container">
//       <h1>Register as an Exhibitor</h1>
//       <input
//         type="text"
//         placeholder="Name"
//         name="name"
//         value={newExhibitor.name}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         placeholder="Category"
//         name="category"
//         value={newExhibitor.category}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         placeholder="Contact Info"
//         name="contact"
//         value={newExhibitor.contact}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         placeholder="Company Name"
//         name="company"
//         value={newExhibitor.company}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleRegister}>Submit Registration</button>
//     </div>
//   );
// };

// export default ExhibitorRegister;
