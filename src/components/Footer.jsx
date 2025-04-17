import React from 'react';
import { Layout, Row, Col } from 'antd';

/**
 * Footer 组件
 * 页面底部区域，使用 Row 和 Col 分列展示关于我们、友情链接、联系方式和社交媒体信息，
 * 底部全宽显示版权信息。
 */
const Footer = () => {
  return (
    <Layout.Footer style={{ background: '#001529', color: '#fff', padding: '20px 50px' }}>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <h4>关于我们</h4>
          <p>图书馆管理系统</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>友情链接</h4>
          <p>友链1, 友链2</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>联系方式</h4>
          <p>电话: 123-456789</p>
          <p>邮箱: info@library.com</p>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>社交媒体</h4>
          <p>微博, 微信</p>
        </Col>
      </Row>
      <hr style={{ borderColor: '#fff' }} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        © 2025 图书馆管理系统. All Rights Reserved.
      </div>
    </Layout.Footer>
  );
};

export default Footer;
