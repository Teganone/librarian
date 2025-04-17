import React, { useState } from 'react';
import { Input, Button, Select, Row, Col, Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

/**
 * QuickSearch 组件
 * 用于图书快速检索，包含搜索条件选择器、搜索输入框和搜索按钮。
 * 宽度限定在页面的70%，并附带简短标语 "探索图书馆的海量资源"。
 */
const QuickSearch = () => {
  const [query, setQuery] = useState('');
  const [condition, setCondition] = useState('title');

  // 模拟搜索逻辑
  const handleSearch = () => {
    console.log(`搜索关键词: ${query}，搜索条件: ${condition}`);
  };

  return (
    <div style={{
      textAlign: 'center',
      margin: '20px auto',
      padding: '20px',
      background: '#f0f2f5',
      borderRadius: '4px',
      width: '70%'
    }}>
      <Title level={3}>探索图书馆的海量资源</Title>
      <Row gutter={16} justify="center" align="middle">
        <Col>
          <Select defaultValue="title" style={{ width: 120 }} onChange={value => setCondition(value)}>
            <Option value="title">书名</Option>
            <Option value="author">作者</Option>
            <Option value="isbn">ISBN</Option>
          </Select>
        </Col>
        <Col flex="auto">
          <Input placeholder="请输入搜索关键词" value={query} onChange={e => setQuery(e.target.value)} />
        </Col>
        <Col>
          <Button type="primary" onClick={handleSearch}>搜索</Button>
        </Col>
      </Row>
    </div>
  );
};

export default QuickSearch;
