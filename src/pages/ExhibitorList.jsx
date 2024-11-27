import React, { useContext, useEffect, useState } from "react";
import { ExhibitorContext } from "../contexts/ExhibitorContext";
import { StallContext } from "../contexts/StallContext";
import "./ExhibitorList.css";

const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

const ExhibitorList = () => {
  const { exhibitors } = useContext(ExhibitorContext);
  const { stalls } = useContext(StallContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedExhibitor, setExpandedExhibitor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}/list-books`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message || "Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  const getBooksByExhibitor = (exhibitorName) => {
    return books.filter((book) => book.exhibitor_name === exhibitorName);
  };

  const getStallByExhibitor = (exhibitorName) => {
    const stall = stalls.find(
      (stall) => stall.assigned && stall.exhibitor?.name === exhibitorName
    );
    return stall ? stall.number : "N/A";
  };

  const toggleExhibitorDetails = (exhibitorName) => {
    setExpandedExhibitor((prev) =>
      prev === exhibitorName ? null : exhibitorName
    );
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredExhibitors = exhibitors.filter(
    (exhibitor) =>
      exhibitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exhibitor.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="exhibitor-list-container">
      <h1 className="exhibitor-list-title">Exhibitor List</h1>
      <input
        type="text"
        placeholder="Search by exhibitor name or category..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {filteredExhibitors.length === 0 ? (
        <p>No exhibitors available.</p>
      ) : (
        <ul className="exhibitor-list">
          {filteredExhibitors.map((exhibitor) => (
            <li
              key={exhibitor.id}
              className={`exhibitor-item ${
                expandedExhibitor === exhibitor.name ? "expanded" : ""
              }`}
            >
              <div
                className="exhibitor-summary"
                onClick={() => toggleExhibitorDetails(exhibitor.name)}
              >
                <h2 className="exhibitor-name">{exhibitor.name}</h2>
                <span className="stall-number">
                  - Stall Number: {getStallByExhibitor(exhibitor.name)}
                </span>
              </div>

              {expandedExhibitor === exhibitor.name && (
                <div className="exhibitor-details">
                  <div className="details-section">
                    <p>
                      <strong>Category:</strong> {exhibitor.category}
                    </p>
                    <p>
                      <strong>Contact:</strong> {exhibitor.contact}
                    </p>
                  </div>
                  <div className="books-section">
                    <h4>Books:</h4>
                    <ul>
                      {getBooksByExhibitor(exhibitor.name).length > 0 ? (
                        getBooksByExhibitor(exhibitor.name).map((book) => (
                          <li key={book.id} className="book-item">
                            <strong>{book.title} </strong> by {book.author}
                          </li>
                        ))
                      ) : (
                        <p>No books added by this exhibitor.</p>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExhibitorList;


// import React, { useContext, useEffect, useState } from "react";
// import { ExhibitorContext } from "../contexts/ExhibitorContext";
// import { StallContext } from "../contexts/StallContext";
// import "./ExhibitorList.css";

// const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

// const ExhibitorList = () => {
//   const { exhibitors } = useContext(ExhibitorContext);
//   const { stalls } = useContext(StallContext);
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [expandedExhibitor, setExpandedExhibitor] = useState(null);

//   const fetchBooks = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await fetch(`${BASE_URL}/list-books`, {
//         method: "GET",
//         credentials: "include",
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch books.");
//       }

//       const data = await response.json();
//       setBooks(data);
//     } catch (err) {
//       setError(err.message || "Failed to fetch books.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getBooksByExhibitor = (exhibitorName) => {
//     return books.filter((book) => book.exhibitor_name === exhibitorName);
//   };

//   const getStallByExhibitor = (exhibitorName) => {
//     const stall = stalls.find(
//       (stall) => stall.assigned && stall.exhibitor?.name === exhibitorName
//     );
//     return stall ? stall.number : "N/A";
//   };

//   const toggleExhibitorDetails = (exhibitorName) => {
//     setExpandedExhibitor((prev) =>
//       prev === exhibitorName ? null : exhibitorName
//     );
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div className="exhibitor-list-container">
//       <h1 className="exhibitor-list-title">Exhibitor List</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error">{error}</p>}

//       {exhibitors.length === 0 ? (
//         <p>No exhibitors available.</p>
//       ) : (
//         <ul className="exhibitor-list">
//           {exhibitors.map((exhibitor) => (
//             <li
//               key={exhibitor.id}
//               className={`exhibitor-item ${
//                 expandedExhibitor === exhibitor.name ? "expanded" : ""
//               }`}
//             >
// <div className="exhibitor-summary" onClick={() => toggleExhibitorDetails(exhibitor.name)}>
//   <h2 className="exhibitor-name">{exhibitor.name}</h2>
//   <span className="stall-number"> - Stall Number: {getStallByExhibitor(exhibitor.name)}</span>
// </div>


//               {expandedExhibitor === exhibitor.name && (
//                 <div className="exhibitor-details">
//                   <div className="details-section">
//                     <p>
//                       <strong>Category:</strong> {exhibitor.category}
//                     </p>
//                     <p>
//                       <strong>Contact:</strong> {exhibitor.contact}
//                     </p>
//                   </div>
//                   <div className="books-section">
//                     <h4>Books:</h4>
//                     <ul>
//                       {getBooksByExhibitor(exhibitor.name).length > 0 ? (
//                         getBooksByExhibitor(exhibitor.name).map((book) => (
//                           <li key={book.id} className="book-item">
//                             <strong>{book.title} </strong> by {book.author}
//                           </li>
//                         ))
//                       ) : (
//                         <p>No books added by this exhibitor.</p>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ExhibitorList;



