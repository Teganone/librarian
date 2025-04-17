import React, { useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

// LoginForm component renders a login form using Ant Design's Form component.
// It includes fields for email and password, and on submission it simulates a login,
// updates the global user state, and navigates to the home page.
const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Inline style for centering form with a max width of 400px
  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
  };

  // Function called when form is submitted
  const onFinish = (values) => {
    // Simulate a login success with a dummy token
    const user = {
      email: values.email,
      token: 'dummy-token',
      role: 'student',  // For demonstration, assuming student role
    };
    login(user);
    message.success('登录成功！');
    navigate('/');
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>登录</h2>
      <Form layout="vertical" onFinish={onFinish}>
        {/* Email input field with validation */}
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '请输入有效的邮箱地址' }]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        {/* Password input field with validation */}
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        {/* Submit button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
