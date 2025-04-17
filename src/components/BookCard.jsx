import React from 'react';
import { Card } from 'antd';

/**
 * BookCard 组件
 * 展示单本图书信息，包括封面、标题、作者和简短描述，支持鼠标悬停高亮效果。
 */
const BookCard = ({ book }) => {
  return (
    <Card
      hoverable
      cover={<img alt={book.title} src={book.cover} style={{ height: '300px', objectFit: 'cover' }} />}
      style={{ width: '100%' }}
    >
      <Card.Meta 
        title={book.title} 
        description={
          <>
            <p>作者: {book.author}</p>
            <p>{book.description}</p>
          </>
        } 
      />
    </Card>
  );
};

export default BookCard;
