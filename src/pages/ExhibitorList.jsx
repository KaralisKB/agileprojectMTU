import React, { useContext, useEffect, useState } from "react";
import { ExhibitorContext } from "../contexts/ExhibitorContext";

const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

const ExhibitorList = () => {
  const { exhibitors } = useContext(ExhibitorContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}/list-books`, {
        method: "GET",
        credentials: "include", // Include cookies for authentication
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

  // Group books by exhibitor name
  const getBooksByExhibitor = (exhibitorName) => {
    return books.filter((book) => book.exhibitor_name === exhibitorName);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="exhibitor-list-container">
      <h1>Exhibitor List</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {exhibitors.length === 0 ? (
        <p>No exhibitors available.</p>
      ) : (
        <ul>
          {exhibitors.map((exhibitor) => (
            <li key={exhibitor.id}>
              <strong>{exhibitor.name}</strong> - {exhibitor.category} -{" "}
              {exhibitor.contact}
              <ul>
                {getBooksByExhibitor(exhibitor.name).length > 0 ? (
                  getBooksByExhibitor(exhibitor.name).map((book) => (
                    <li key={book.id}>
                      <strong>{book.title}</strong> by {book.author}
                      <p>{book.description}</p>
                    </li>
                  ))
                ) : (
                  <li>No books added by this exhibitor.</li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExhibitorList;

// import React, { useContext } from "react";
// import { ExhibitorContext } from "../contexts/ExhibitorContext";

// const ExhibitorList = () => {
//   const { exhibitors } = useContext(ExhibitorContext);

//   return (
//     <div className="exhibitor-list-container">
//       <h1>Exhibitor List</h1>
//       {exhibitors.length === 0 ? (
//         <p>No exhibitors available.</p>
//       ) : (
//         <ul>
//           {exhibitors.map((exhibitor) => (
//             <li key={exhibitor.id}>
//               <strong>{exhibitor.name}</strong> - {exhibitor.category} -{" "}
//               {exhibitor.contact}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ExhibitorList;
// import { Link } from 'react-router-dom';
// import './ExhibitorList.css';

// const exhibitors = [
//   { id: 1, name: 'Cambridge University Press', category: 'Academic Publishers' },
//   { id: 2, name: 'Association of Taipei Publishers', category: 'Cultural Organizations' },
//   { id: 3, name: 'Argentina Consulate General', category: 'Government Representation' },
//   { id: 4, name: 'Hong Kong University Press', category: 'University Publishers' },
//   { id: 5, name: 'Oxford University Press', category: 'Academic Publishers' },
//   { id: 6, name: 'Harvard University Press', category: 'University Publishers' },
//   { id: 7, name: 'Scholastic Inc.', category: 'Children and Educational Publishers' },
//   { id: 8, name: 'Penguin Random House', category: 'General Publishers' },
//   { id: 9, name: 'Springer Nature', category: 'Scientific Publishers' },
//   { id: 10, name: 'Taschen', category: 'Art and Design Publishers' },
// ];

// const ExhibitorList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredExhibitors, setFilteredExhibitors] = useState(exhibitors);

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = exhibitors.filter(
//       (exhibitor) =>
//         exhibitor.name.toLowerCase().includes(value) ||
//         exhibitor.category.toLowerCase().includes(value)
//     );
//     setFilteredExhibitors(filtered);
//   };

//   const groupedExhibitors = filteredExhibitors.reduce((acc, exhibitor) => {
//     if (!acc[exhibitor.category]) acc[exhibitor.category] = [];
//     acc[exhibitor.category].push(exhibitor);
//     return acc;
//   }, {});

//   return (
//     <div className="exhibitor-list-container">
//       <h1 className="exhibitor-list-title">Exhibitors</h1>
//       <input
//         type="text"
//         placeholder="Search by name or category"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="search-input"
//       />
//       {Object.keys(groupedExhibitors).map((category) => (
//         <div key={category} className="category-section">
//           <h2 className="category-title">{category}</h2>
//           <ul className="exhibitor-list">
//             {groupedExhibitors[category].map((exhibitor) => (
//               <li key={exhibitor.id}>
//                 <Link to={`/visitor/exhibitor-list/${exhibitor.id}`} className="exhibitor-link">
//                   {exhibitor.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExhibitorList;
