import React from 'react';
import { Row, Col } from 'antd';
import ServiceCard from './ServiceCard';

/**
 * LibraryServices 组件
 * 以网格的方式展示图书馆提供的各项服务，每个服务使用 ServiceCard 组件表示。
 */
const LibraryServices = () => {
  // 模拟服务数据，每行四个
  const services = [
    { id: 1, icon: '📚', title: '图书借阅', description: '提供便捷高效的图书借阅服务。' },
    { id: 2, icon: '💻', title: '电子资源', description: '海量电子书与在线数据库。' },
    { id: 3, icon: '🎤', title: '讲座活动', description: '定期举办各类专题讲座。' },
    { id: 4, icon: '🖨️', title: '自助打印', description: '快速高效的自助打印服务。' },
  ];

  return (
    <div style={{ margin: '20px 0' }}>
      <h3>图书馆服务介绍</h3>
      <Row gutter={[16, 16]}>
        {services.map(service => (
          <Col key={service.id} xs={24} sm={12} md={6}>
            <ServiceCard service={service} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LibraryServices;
