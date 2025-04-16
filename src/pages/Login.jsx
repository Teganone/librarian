/*
  Login.jsx
  ----------------------------
  登录页面组件，用于展示登录表单。
  页面使用 Ant Design 的 Card 组件包裹 LoginForm，并居中显示。
*/

import React from 'react';
import { Card } from 'antd';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card title="登录" style={{ width: 400 }}>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
