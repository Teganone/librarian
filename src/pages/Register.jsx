/*
  Register.jsx
  ----------------------------
  注册页面组件，用于展示注册表单。
  页面使用 Ant Design 的 Card 组件包裹 RegisterForm，并居中显示。
*/

import React from 'react';
import { Card } from 'antd';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card title="注册" style={{ width: 400 }}>
        <RegisterForm />
      </Card>
    </div>
  );
};

export default Register;
