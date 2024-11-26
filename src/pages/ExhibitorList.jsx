import React, { useContext } from "react";
import { ExhibitorContext } from "../../contexts/ExhibitorContext";

const ExhibitorList = () => {
  const { exhibitors } = useContext(ExhibitorContext);

  return (
    <div className="exhibitor-list-container">
      <h1>Exhibitor List</h1>
      {exhibitors.length === 0 ? (
        <p>No exhibitors available.</p>
      ) : (
        <ul>
          {exhibitors.map((exhibitor) => (
            <li key={exhibitor.id}>
              <strong>{exhibitor.name}</strong> - {exhibitor.category} -{" "}
              {exhibitor.contact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExhibitorList;
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
