import React from "react";
import { List, Button, Image } from "antd";

const BorrowList = ({ borrowedBooks, onReturn }) => {
  // Calculate message for due status
  const getDueMessage = (book) => {
    const dueDate = new Date(book.dueDate);
    const today = new Date();
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (book.isOverdue) {
      return diffDays < 0 ? `Overdue by ${Math.abs(diffDays)} days` : "Overdue";
    } else {
      return diffDays > 0 ? `Due in ${diffDays} days` : "Due soon";
    }
  };

  return (
    <div>
      <h3>Borrowed Books</h3>
      <List
        itemLayout="horizontal"
        dataSource={borrowedBooks}
        renderItem={(book) => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => onReturn(book.id)}>
                Return
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Image width={50} src="https://via.placeholder.com/50" alt="cover" />}
              title={book.title}
              description={getDueMessage(book)}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default BorrowList;
