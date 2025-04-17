import React from 'react';
import { Card } from 'antd';

/**
 * AnnouncementItem 组件
 * 用 Card 组件展示单条公告，包含公告标题、日期及简短内容。
 */
const AnnouncementItem = ({ announcement }) => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <h4>{announcement.title}</h4>
      <p><small>{announcement.date}</small></p>
      <p>{announcement.content}</p>
    </Card>
  );
};

export default AnnouncementItem;
