/*
  LogoutButton.jsx
  ----------------------
  独立登出组件，使用 Ant Design 的 Button 组件实现。
  功能：
   - 点击按钮执行登出逻辑，清除全局用户状态。
   - 模拟调用登出接口（如有），使用 react-router 重定向到首页。
   - 显示登出成功提示。
*/

import React, { useContext } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LogoutButton = () => {
  // 从全局 AuthContext 中获取 logout 方法
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 点击按钮时执行的登出逻辑
  const handleLogout = () => {
    // 清空全局用户状态
    logout();
    // 显示登出成功提示
    message.success('登出成功！');
    // 重定向到首页
    navigate('/');
  };

  return (
    <Button type="primary" danger onClick={handleLogout}>
      登出
    </Button>
  );
};

export default LogoutButton;
