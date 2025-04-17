import React from 'react';
import { Row, Col } from 'antd';
import BookCard from './BookCard';

/**
 * PopularBooks 组件
 * 以网格形式展示热门图书推荐，每本图书使用 BookCard 组件显示基本信息。
 */
const PopularBooks = () => {
  // 模拟热门图书数据
  const books = [
    { id: 1, cover: 'https://via.placeholder.com/200x300?text=Book+1', title: '书籍1', author: '作者1', description: '这是一本有趣的书籍，非常值得一读。' },
    { id: 2, cover: 'https://via.placeholder.com/200x300?text=Book+2', title: '书籍2', author: '作者2', description: '内容精彩纷呈，适合各年龄层读者。' },
    { id: 3, cover: 'https://via.placeholder.com/200x300?text=Book+3', title: '书籍3', author: '作者3', description: '从多个角度探讨文化与历史。' },
    { id: 4, cover: 'https://via.placeholder.com/200x300?text=Book+4', title: '书籍4', author: '作者4', description: '经典名著，阅读后让人受益匪浅。' },
    { id: 5, cover: 'https://via.placeholder.com/200x300?text=Book+5', title: '书籍5', author: '作者5', description: '引人深思的故事情节以及设计独特。' },
    { id: 6, cover: 'https://via.placeholder.com/200x300?text=Book+6', title: '书籍6', author: '作者6', description: '故事扣人心弦，多角度展现人性。' },
    { id: 7, cover: 'https://via.placeholder.com/200x300?text=Book+7', title: '书籍7', author: '作者7', description: '风格独特的叙事，兼具文学性与可读性。' },
    { id: 8, cover: 'https://via.placeholder.com/200x300?text=Book+8', title: '书籍8', author: '作者8', description: '必读佳作，流传广泛影响深远。' },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>热门图书推荐</h3>
      <Row gutter={[16, 16]}>
        {books.map(book => (
          <Col key={book.id} xs={24} sm={12} md={12} lg={6}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularBooks;
