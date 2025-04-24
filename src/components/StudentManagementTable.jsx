import React from 'react';
import { Table, Button, Popconfirm } from 'antd';
import * as api from '../api';

const StudentManagementTable = ({ students }) => {
  const columns = [
    { title: 'Student ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button onClick={() => api.toggleUserStatus(record.id)}>
            {record.status === 'active' ? 'Deactivate' : 'Activate'}
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => api.deleteUser(record.id)}
          >
            <Button danger style={{ marginLeft: 8 }}>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return <Table dataSource={students} columns={columns} rowKey="id" />;
};

export default StudentManagementTable;