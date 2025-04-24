import React from 'react';
import { Table } from 'antd';

const InventoryTable = ({ books }) => {
  const columns = [
    { title: 'Book ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Status', dataIndex: 'state', key: 'state' },
    { title: 'Borrow Count', dataIndex: 'borrowCount', key: 'borrowCount' },
  ];

  return <Table dataSource={books} columns={columns} rowKey="id" />;
};

export default InventoryTable;