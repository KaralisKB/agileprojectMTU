import React, { useState, useEffect } from "react";
import "./ExhibitorBooks.css";

const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

const ExhibitorBooks = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    exhibitor_name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}/list-books`, {
        method: "GET",
        credentials: "include", // Include cookies for authentication
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }
        throw new Error(`Failed to fetch books: ${response.status}`);
      }

      const data = await response.json();
      setBooks(Array.isArray(data) ? data : []);
    } catch (error) {
      setError(error.message || "Failed to fetch books. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  // Add a new book
  const addBook = async () => {
    try {
      if (
        !newBook.title ||
        !newBook.author ||
        !newBook.description ||
        !newBook.exhibitor_name
      ) {
        alert("Please fill out all fields, including Exhibitor Name.");
        return;
      }

      const response = await fetch(`${BASE_URL}/create-book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Include cookies for authentication
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }
        throw new Error("Failed to add book.");
      }

      await fetchAllBooks(); // Refresh the book list after adding a new book
      setNewBook({ title: "", author: "", description: "", exhibitor_name: "" });
    } catch (error) {
      setError(error.message || "Failed to add book. Please try again.");
    }
  };

  // Handle input changes for the new book form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="manage-books-container">
      <h1 className="manage-books-title">Exhibitor Book Management</h1>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="add-book-form">
        <h2>Add New Book</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newBook.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          placeholder="Exhibitor Name"
          name="exhibitor_name"
          value={newBook.exhibitor_name}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div>
        <h2>All Books</h2>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <strong>{book.title}</strong> by {book.author}
              <p>{book.description}</p>
              <p>
                <em>{book.exhibitor_name}</em>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {!loading && !error && books.length === 0 && (
        <p className="no-books-message">No books available.</p>
      )}
    </div>
  );
};

export default ExhibitorBooks;
