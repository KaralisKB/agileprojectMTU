import React, { useState, useEffect } from "react";
import "./BookList.css";

const BookList = () => {
  const BASE_URL = "https://apibookfair.danielefarriciello.dev/api/v1";

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all books
  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}/list-books`);
      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }
      const data = await response.json();
      setBooks(data);
      setSelectedBook(null); // Clear selected book when fetching all
    } catch (error) {
      setError(error.message || "Failed to fetch books. Please try again.");
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch book by ID
  const fetchBookById = async (bookId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}/book/${bookId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch book details.");
      }
      const data = await response.json();
      setSelectedBook(data);
    } catch (error) {
      setError(error.message || `Failed to fetch book with ID ${bookId}.`);
      console.error(`Error fetching book with ID ${bookId}:`, error);
    } finally {
      setLoading(false);
    }
  };

  // Search books by name
  const searchBooksByName = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${BASE_URL}/search-book-by-name?name=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error("Failed to search books.");
      }
      const data = await response.json();
      setBooks(data);
      setSelectedBook(null); // Clear selected book when searching
    } catch (error) {
      setError(error.message || "Failed to search books. Please try again.");
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Trigger book search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchBooksByName();
    }
  };

  // Clear search and fetch all books
  const handleClearSearch = () => {
    setSearchTerm("");
    fetchAllBooks();
  };

  // Fetch all books on component mount
  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="book-list-container">
      <h1 className="book-list-title">Book List</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
        {searchTerm && (
          <button type="button" onClick={handleClearSearch} className="clear-button">
            Clear Search
          </button>
        )}
      </form>

      {/* Loading and Error Messages */}
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Display All Books */}
      {!loading && !error && books.length === 0 && (
        <p className="no-books-message">No books found.</p>
      )}
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <span
              onClick={() => fetchBookById(book.id)}
              className="book-link"
            >
              {book.title} {/* Changed from 'name' to 'title' */}
            </span>
          </li>
        ))}
      </ul>

      {/* Display Selected Book Details */}
      {selectedBook && (
        <div className="book-details">
          <h2>{selectedBook.title}</h2> {/* Changed from 'name' to 'title' */}
          <p><strong>Author:</strong> {selectedBook.author}</p>
          <p><strong>Description:</strong> {selectedBook.description}</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
