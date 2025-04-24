/**
 * Mock API functions for the librarian dashboard and student dashboard.
 * In a real application, these would perform HTTP requests to a backend.
 */

// Student dashboard APIs
export const returnBook = async (bookId) => {
  console.log(`Mock: Returning book ${bookId}`);
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 300));
  return { success: true };
};

export const toggleFavorite = async (bookId) => {
  console.log(`Mock: Toggling favorite for book ${bookId}`);
  await new Promise((res) => setTimeout(res, 300));
  return { success: true };
};

// Staff dashboard APIs
export const sendReminder = async (userId, bookId) => {
  console.log(`Mock: Sending reminder to user ${userId} for book ${bookId}`);
  await new Promise((res) => setTimeout(res, 300));
  return { success: true };
};

export const toggleUserStatus = async (userId) => {
  console.log(`Mock: Toggling status for user ${userId}`);
  await new Promise((res) => setTimeout(res, 300));
  return { success: true };
};

export const deleteUser = async (userId) => {
  console.log(`Mock: Deleting user ${userId}`);
  await new Promise((res) => setTimeout(res, 300));
  return { success: true };
};

// Fetch helpers (could be extended)
export const fetchPendingReturns = async () => {
  // Return mock data shape: { userId, userName, bookTitle, dueDate, status }
  return [
    { userId: "STU001", userName: "John Doe", bookTitle: "The Great Gatsby", dueDate: "2025-04-20", status: "Overdue" },
    { userId: "STU002", userName: "Jane Smith", bookTitle: "1984", dueDate: "2025-04-25", status: "Due Soon" },
  ];
};

export const fetchInventory = async () => {
  return [
    { id: "BK001", title: "1984", category: "Fiction", state: "Available", borrowCount: 42 },
    { id: "BK002", title: "Sapiens", category: "History", state: "Checked Out", borrowCount: 30 },
  ];
};

export const fetchStudents = async () => {
  return [
    { id: "STU001", email: "john@example.com", name: "John Doe", status: "Active" },
    { id: "STU002", email: "jane@example.com", name: "Jane Smith", status: "Blocked" },
  ];
};