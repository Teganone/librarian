import React, { useContext } from 'react';
import { Layout, Menu, Button } from 'antd';
import { AuthContext } from '../context/AuthContext';

/**
 * Header 组件
 * 显示图书馆 LOGO、系统名称、导航菜单及登录状态（未登录时显示登录/注册按钮；已登录时显示用户信息和登出按钮）。
 */
const Header = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // 导航菜单项
  const menuItems = [
    { key: 'home', label: '首页' },
    { key: 'search', label: '图书检索' },
    { key: 'new', label: '新书推荐' },
    { key: 'guide', label: '借阅指南' },
  ];

  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center' }}>
      {/* 左侧 LOGO 和系统名称 */}
      <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginRight: '20px' }}>
        图书馆管理系统
      </div>
      {/* 中间导航菜单 */}
      <Menu theme="dark" mode="horizontal" items={menuItems} style={{ flex: 1 }} />
      {/* 右侧登录状态 */}
      <div>
        {currentUser ? (
          <>
            <span style={{ color: '#fff', marginRight: '10px' }}>欢迎, {currentUser.email}</span>
            <Button type="primary" danger onClick={logout}>登出</Button>
          </>
        ) : (
          <>
            <Button type="primary" style={{ marginRight: '10px' }}>登录</Button>
            <Button>注册</Button>
          </>
        )}
      </div>
    </Layout.Header>
  );
};

export default Header;
