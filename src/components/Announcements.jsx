import React from 'react';
import { List, Typography, Button } from 'antd';
import AnnouncementItem from './AnnouncementItem';

const { Title } = Typography;

/**
 * Announcements 组件
 * 显示最新公告，使用 Ant Design 的 List 组件展示每条公告，且在顶部显示 "查看更多" 链接。
 */
const Announcements = () => {
  // 模拟公告数据
  const announcements = [
    { id: 1, title: '图书借阅新规定', date: '2025-04-01', content: '借阅流程更新，请前往官网查看详情。' },
    { id: 2, title: '新入馆服务', date: '2025-03-28', content: '提供更多便捷服务，了解详情请访问官网。' },
    { id: 3, title: '假期开放公告', date: '2025-03-15', content: '假期期间开放时间做了调整，请注意查看。' },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={4} style={{ margin: 0 }}>最新公告</Title>
        <Button type="link">查看更多</Button>
      </div>
      <List
        dataSource={announcements}
        renderItem={item => <AnnouncementItem announcement={item} />}
      />
    </div>
  );
};

export default Announcements;
