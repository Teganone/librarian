import React from 'react';
import { Row, Col, message } from 'antd';
import BookCard from './BookCard';
import { books } from '../mockData';

/**
 * PopularBooks Component
 * 
 * 以网格形式展示热门图书推荐，每本图书使用 BookCard 组件显示基本信息。
 * 
 * 功能说明:
 * - 从 mockData 中获取图书数据，并过滤出评分为 5（满分）的图书，同时确保图书是可借阅的（available 为 true）。
 * - 仅取过滤后的前 8 本图书作为热门书籍推荐展示。
 * - 如果没有符合条件的书籍，则显示一条警告消息。
 * - 使用 Ant Design 的 Row 和 Col 组件构建响应式网格布局。
 *
 * 详细逻辑:
 * 1. 使用 filter 方法筛选出满足条件的图书：book.rating === 5 && book.available。
 * 2. 使用 slice(0, 8) 方法选择前 8 本图书。
 * 3. 遍历 popularBooks 数组，为每本书渲染一个 BookCard。
 */
const PopularBooks = () => {
  // 筛选出评分为 5 且可借阅的图书，并选择前 8 本
  const popularBooks = books.filter(book => book.rating === 5 && book.available).slice(0, 8);

  // 当没有满足条件的热门书籍时，显示警告消息
  if (popularBooks.length === 0) {
    message.warning('没有符合条件的热门图书');
  }

  return (
    <div style={{ margin: '20px auto', maxWidth: 2000 }}>
      <h3>热门图书推荐</h3>
      <Row gutter={[16, 16]}>
        {popularBooks.map(book => (
          <Col key={book.id} xs={24} sm={12} md={12} lg={6}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularBooks;
