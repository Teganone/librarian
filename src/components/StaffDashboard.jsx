import React, { useEffect, useContext } from 'react';
import { Layout, Row, Col, Typography, message } from 'antd';
import Header from './Header';
import Footer from './Footer';
import OverviewCard from './OverviewCard';
import PendingReturnsTable from './PendingReturnsTable';
import InventoryTable from './InventoryTable';
import StudentManagementTable from './StudentManagementTable';
import { StaffContext } from '../context/StaffContext';
import * as api from '../api.js';

const { Content } = Layout;
const { Title } = Typography;

/**
 * StaffDashboard.jsx
 *
 * 职员仪表盘主页面，集成：
 * - OverviewCard: 全馆借出统计
 * - PendingReturnsTable: 待归还提醒
 * - InventoryTable: 库存管理
 * - StudentManagementTable: 学生用户管理
 *
 * 从 StaffContext 获取全局状态和刷新方法，并在 mount 时拉取数据。
 */
const StaffDashboard = () => {
  const {
    totalBorrowed,
    pendingReturns,
    inventory,
    students,
    fetchDashboardData,
  } = useContext(StaffContext);

  useEffect(() => {
    fetchDashboardData().catch(err => {
      console.error(err);
      message.error('无法加载仪表盘数据');
    });
  }, [fetchDashboardData]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '24px' }}>
        <Title level={2}>Staff Dashboard</Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <OverviewCard totalBorrowed={totalBorrowed} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col span={24}>
            <PendingReturnsTable pendingList={pendingReturns} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col span={24}>
            <InventoryTable books={inventory} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col span={24}>
            <StudentManagementTable students={students} />
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
};

export default StaffDashboard;