import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
// 导入各个子组件
import Header from './Header';
import QuickSearch from './QuickSearch';
import Carousel from './Carousel';
import Announcements from './Announcements';
import PopularBooks from './PopularBooks';
import OpeningHours from './OpeningHours';
import LibraryServices from './LibraryServices';
import Footer from './Footer';

/**
 * PublicHome 组件
 * 作为公共首页的主容器，负责整体页面布局和组织所有子组件。
 * 使用 Ant Design 的 Layout 组件，页面结构从上到下依次为：Header、Content 和 Footer。
 */
const PublicHome = () => {
  return (
    <Layout>
      {/* 顶部固定导航栏 */}
      <Header />

      {/* 主内容区 */}
      <Layout.Content style={{ padding: '20px', marginTop: 64 }}>
        {/* 快速检索区 */}
        <QuickSearch />

        <Divider />

        {/* 轮播图展示区 */}
        <Carousel />

        <Divider />

        {/* 公告区 */}
        <Announcements />

        <Divider />

        {/* 内容分栏区：左侧热门图书，右侧开放时间 */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={16}>
            <PopularBooks />
          </Col>
          <Col xs={24} md={8}>
            <OpeningHours />
          </Col>
        </Row>

        <Divider />

        {/* 图书馆服务介绍 */}
        <LibraryServices />
      </Layout.Content>

      {/* 页脚 */}
      <Footer />
    </Layout>
  );
};

export default PublicHome;
