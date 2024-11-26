import React, { useState, useEffect } from "react";
import "./ExhibitorBooks.css";

const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

const ExhibitorBooks = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", description: "" });
  const [editingBook, setEditingBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      if (!token) {
        throw new Error("No authentication token found. Please log in.");
      }

      const response = await fetch(`${BASE_URL}/list-books`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch books.");
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setBooks(data);
      } else {
        setBooks([]);
      }
    } catch (error) {
      setError(error.message || "An unexpected error occurred while fetching books.");
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new book
  const addBook = async () => {
    try {
      if (!newBook.title || !newBook.author || !newBook.description) {
        alert("Please fill out all fields.");
        return;
      }

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found. Please log in.");
      }

      const response = await fetch(`${BASE_URL}/create-book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add book.");
      }

      fetchAllBooks();
      setNewBook({ title: "", author: "", description: "" });
    } catch (error) {
      setError(error.message || "An unexpected error occurred while adding the book.");
      console.error("Error adding book:", error);
    }
  };

  // Update an existing book
  const updateBook = async (bookId) => {
    try {
      if (!editingBook.title || !editingBook.author || !editingBook.description) {
        alert("Please fill out all fields.");
        return;
      }

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found. Please log in.");
      }

      const response = await fetch(`${BASE_URL}/update-book/${bookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editingBook),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update book.");
      }

      fetchAllBooks();
      setEditingBook(null);
    } catch (error) {
      setError(error.message || "An unexpected error occurred while updating the book.");
      console.error("Error updating book:", error);
    }
  };

  // Delete a book
  const deleteBook = async (bookId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token found. Please log in.");
      }

      const response = await fetch(`${BASE_URL}/delete-book/${bookId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete book.");
      }

      fetchAllBooks();
    } catch (error) {
      setError(error.message || "An unexpected error occurred while deleting the book.");
      console.error("Error deleting book:", error);
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
        <button onClick={addBook}>Add Book</button>
      </div>

      <div>
        <h2>All Books</h2>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <strong>{book.title}</strong> by {book.author}
              <p>{book.description}</p>
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
          <button className="update-button" onClick={() => updateBook(editingBook.id)}>Update Book</button>
          <button className="cancel-button" onClick={() => setEditingBook(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ExhibitorBooks;
