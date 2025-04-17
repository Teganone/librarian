import React from 'react';
import { Card } from 'antd';

/**
 * ServiceCard 组件
 * 用于展示图书馆各项服务的信息，包括图标、标题和描述，支持点击查看详情（后续可扩展）。
 */
const ServiceCard = ({ service }) => {
  return (
    <Card hoverable style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '40px', marginBottom: '10px' }}>{service.icon}</div>
      <h4>{service.title}</h4>
      <p>{service.description}</p>
    </Card>
  );
};

export default ServiceCard;
