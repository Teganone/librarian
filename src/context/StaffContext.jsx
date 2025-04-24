import React, { createContext, useState, useCallback } from 'react';
import {
  fetchPendingReturns,
  fetchInventory,
  fetchStudents,
} from '../api.js';

/**
 * StaffContext provides dashboard data and refresh method for staff dashboard.
 */
export const StaffContext = createContext({
  totalBorrowed: 0,
  pendingReturns: [],
  inventory: [],
  students: [],
  fetchDashboardData: async () => {},
});

export const StaffProvider = ({ children }) => {
  const [totalBorrowed, setTotalBorrowed] = useState(0);
  const [pendingReturns, setPendingReturns] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [students, setStudents] = useState([]);

  const fetchDashboardData = useCallback(async () => {
    try {
      const pending = await fetchPendingReturns();
      setPendingReturns(pending);

      const inv = await fetchInventory();
      setInventory(inv);

      const studs = await fetchStudents();
      setStudents(studs);

      // Compute total borrowed books from inventory borrowCount
      const total = inv.reduce((sum, book) => sum + (book.borrowCount || 0), 0);
      setTotalBorrowed(total);
    } catch (error) {
      console.error('Error fetching staff dashboard data:', error);
      throw error;
    }
  }, []);

  return (
    <StaffContext.Provider
      value={{
        totalBorrowed,
        pendingReturns,
        inventory,
        students,
        fetchDashboardData,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};