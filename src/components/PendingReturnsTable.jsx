import React from 'react';
import { Table, Button } from 'antd';
import * as api from '../api';

const PendingReturnsTable = ({ pendingList }) => {
  const columns = [
    { title: 'Book ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Borrower', dataIndex: 'user', key: 'user' },
    { title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => api.sendReminder(record.id)}>Remind</Button>
      ),
    },
  ];

  return <Table dataSource={pendingList} columns={columns} rowKey="id" />;
};

export default PendingReturnsTable;