import React from 'react';
import { Descriptions, Divider, List } from 'antd';

/**
 * OpeningHours 组件
 * 使用 Descriptions 展示各区域开放时间，并用 List 显示联系方式。
 */
const OpeningHours = () => {
  // 模拟开放时间数据
  const hours = [
    { area: '总馆', time: '08:00 - 20:00' },
    { area: '分馆A', time: '09:00 - 18:00' },
    { area: '分馆B', time: '10:00 - 17:00' }
  ];

  // 模拟联系方式数据
  const contacts = [
    '电话: 123-456789',
    '邮箱: info@library.com',
    '地址: 某市某区图书馆路100号'
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>开放时间 & 联系方式</h3>
      <Descriptions bordered column={1} size="small" title="开放时间">
        {hours.map((item, index) => (
          <Descriptions.Item key={index} label={item.area}>
            {item.time}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <Divider />
      <h4>联系方式</h4>
      <List dataSource={contacts} renderItem={item => <List.Item>{item}</List.Item>} />
    </div>
  );
};

export default OpeningHours;
