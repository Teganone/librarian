import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Reused Header and Footer components
import Header from "./Header";
import Footer from "./Footer";
// Subcomponents for the dashboard layout
import BorrowList from "./BorrowList";
import RecommendationGrid from "./RecommendationGrid";
import QuickActions from "./QuickActions";
// Import API functions (assumed to be defined for handling actions)
import { returnBook as apiReturnBook, toggleFavorite as apiToggleFavorite } from "../api";

/*
 * StudentDashboard.jsx
 * 
 * This component renders the student-specific dashboard including:
 *  - BorrowList: displays the list of borrowed books
 *  - RecommendationGrid: displays 8 recommended books in a 4-column grid
 *  - QuickActions: provides shortcut buttons for common actions
 * 
 * It reuses the global Header and Footer, and manages local state for borrowed books
 * and recommendations. In a real application, this state would be managed globally (e.g., via Context or Redux).
 *
 * Action Handlers:
 *  - handleReturnBook: calls api.returnBook(id) and refreshes the list
 *  - handleToggleFavorite: calls api.toggleFavorite(id) and updates favorite state
 */

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Dummy data for borrowed books
  const [borrowedBooks, setBorrowedBooks] = useState([
    { id: 1, title: "1984", dueDate: "2025-04-20", isOverdue: false },
    { id: 2, title: "Brave New World", dueDate: "2025-04-15", isOverdue: true },
  ]);

  // Dummy data for recommendations (each with an extra isFavorite property)
  const [recommendations, setRecommendations] = useState([
    { id: 101, title: "To Kill a Mockingbird", coverUrl: "https://via.placeholder.com/100", rating: 4.5, isFavorite: false },
    { id: 102, title: "The Great Gatsby", coverUrl: "https://via.placeholder.com/100", rating: 4.0, isFavorite: false },
    { id: 103, title: "Moby Dick", coverUrl: "https://via.placeholder.com/100", rating: 3.5, isFavorite: false },
    { id: 104, title: "War and Peace", coverUrl: "https://via.placeholder.com/100", rating: 4.2, isFavorite: false },
    { id: 105, title: "Crime and Punishment", coverUrl: "https://via.placeholder.com/100", rating: 4.7, isFavorite: false },
    { id: 106, title: "Pride and Prejudice", coverUrl: "https://via.placeholder.com/100", rating: 4.8, isFavorite: false },
    { id: 107, title: "The Catcher in the Rye", coverUrl: "https://via.placeholder.com/100", rating: 3.9, isFavorite: false },
    { id: 108, title: "The Odyssey", coverUrl: "https://via.placeholder.com/100", rating: 4.3, isFavorite: false },
  ]);

  // Handler for returning a book
  const handleReturnBook = async (bookId) => {
    try {
      await apiReturnBook(bookId);
      // Refresh borrowedBooks by removing the returned book
      setBorrowedBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  // Handler for toggling favorite status of a recommended book
  const handleToggleFavorite = async (bookId) => {
    try {
      await apiToggleFavorite(bookId);
      // Update the favorite status in recommendations
      setRecommendations(prevRecs =>
        prevRecs.map(rec =>
          rec.id === bookId ? { ...rec, isFavorite: !rec.isFavorite } : rec
        )
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  // Dummy handlers for QuickActions buttons:
  const handleSearch = () => {
    console.log("Search Books action triggered.");
  };

  const handleBorrow = () => {
    console.log("Borrow Book action triggered.");
  };

  const handleReturnAction = () => {
    console.log("Return Book action triggered.");
  };

  const handleFavoritess = () => {
    console.log("Favorite Books action triggered.");
  };

  return (
    <div>
      <Header />
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <h2>Student Dashboard</h2>
        {/* Display the list of borrowed books */}
        <BorrowList borrowedBooks={borrowedBooks} onReturn={handleReturnBook} />
        {/* Display the grid of 8 recommended books */}
        <RecommendationGrid recommendations={recommendations} onToggleFavorite={handleToggleFavorite} />
        {/* Display quick action buttons */}
        <QuickActions
          onSearch={handleSearch}
          onBorrow={handleBorrow}
          onReturn={handleReturnAction}
          onFavoritess={handleFavoritess}
        />
      </main>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
