import React from "react";
import { Button, Space } from "antd";

/*
 * QuickActions.jsx
 *
 * This component displays four large buttons: Search Books, Borrow Book, Return Book, and Favorite Books.
 * It accepts the following props:
 *   - onSearch: callback for Search Books action
 *   - onBorrow: callback for Borrow Book action
 *   - onReturn: callback for Return Book action
 *   - onFavoritess: callback for Favorite Books action (supports hover/pressed variants)
 */

const QuickActions = ({ onSearch, onBorrow, onReturn, onFavoritess }) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <h3>Quick Actions</h3>
      <Space size="large">
        <Button type="primary" onClick={onSearch}>Search Books</Button>
        <Button type="primary" onClick={onBorrow}>Borrow Book</Button>
        <Button type="primary" onClick={onReturn}>Return Book</Button>
        <Button type="primary" onClick={onFavoritess}>Favorite Books</Button>
      </Space>
    </div>
  );
};

export default QuickActions;
