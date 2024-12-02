import React, { useState, useEffect } from "react";
import "./ManageBooks.css";

const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    exhibitor_name: "", 
  });
  const [editingBook, setEditingBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${BASE_URL}/list-books`, {
        method: "GET",
        credentials: "include", // Include cookies
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
      if (!newBook.title || !newBook.author || !newBook.description || !newBook.exhibitor_name) {
        alert("Please fill out all fields, including Exhibitor Name.");
        return;
      }

      const response = await fetch(`${BASE_URL}/create-book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }
        throw new Error("Failed to add book.");
      }

      await fetchAllBooks();
      setNewBook({ title: "", author: "", description: "", exhibitor_name: "" });
    } catch (error) {
      setError(error.message || "Failed to add book. Please try again.");
    }
  };

  // Update a book
  const updateBook = async (bookId) => {
    try {
      const response = await fetch(`${BASE_URL}/update-book/${bookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies
        body: JSON.stringify(editingBook),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }
        throw new Error("Failed to update book.");
      }

      await fetchAllBooks();
      setEditingBook(null);
    } catch (error) {
      setError(error.message || "Failed to update book. Please try again.");
    }
  };

  // Delete a book
  const deleteBook = async (bookId) => {
    try {
      const response = await fetch(`${BASE_URL}/delete-book/${bookId}`, {
        method: "DELETE",
        credentials: "include", // Include cookies
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }
        throw new Error("Failed to delete book.");
      }

      await fetchAllBooks();
    } catch (error) {
      setError(error.message || "Failed to delete book. Please try again.");
    }
  };

  // Handle input changes
  const handleInputChange = (e, isEditing = false) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingBook((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewBook((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="manage-books-container">
      <h1 className="manage-books-title">Manage Books</h1>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="add-book-form">
        <h2>Add New Book</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newBook.title}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={(e) => handleInputChange(e)}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newBook.description}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <input
          type="text"
          placeholder="Exhibitor Name"
          name="exhibitor_name"
          value={newBook.exhibitor_name}
          onChange={(e) => handleInputChange(e)}
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
              <p><em>Exhibitor: {book.exhibitor_name}</em></p>
              <button className="edit" onClick={() => setEditingBook(book)}>Edit</button>
              <button className="delete" onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {editingBook && (
        <div className="edit-book-form">
          <h2>Edit Book</h2>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={editingBook.title}
            onChange={(e) => handleInputChange(e, true)}
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={editingBook.author}
            onChange={(e) => handleInputChange(e, true)}
          />
          <textarea
            placeholder="Description"
            name="description"
            value={editingBook.description}
            onChange={(e) => handleInputChange(e, true)}
          ></textarea>
          <input
            type="text"
            placeholder="Exhibitor Name"
            name="exhibitor_name"
            value={editingBook.exhibitor_name}
            onChange={(e) => handleInputChange(e, true)}
          />
          <button onClick={() => updateBook(editingBook.id)}>Update Book</button>
          <button className="cancel-button" onClick={() => setEditingBook(null)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
