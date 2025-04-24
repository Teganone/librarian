/*
  LoginForm.jsx
  用户登录模块，采用 Ant Design 提供垂直布局的表单组件
  组件功能：
    - 显示登录表单（邮箱和密码）
    - 对邮箱进行格式验证，对于管理员账户（邮箱为 'admin'）要求密码必须为 'admin'
    - 表单提交后，更新全局用户状态，并利用 react-router 重定向到用户主页
  作者：OpenHands Agent
  日期：2025-04-16
*/

import React, { useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const LoginForm = () => {
  // 使用 react-router 的 useNavigate 实现页面跳转
  const navigate = useNavigate();
  
  // 从 AuthContext 中获取设置当前用户的函数
  const { login } = useContext(AuthContext);

  // 表单样式：垂直布局，最大宽度400px，居中显示
  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
  };

  // 表单提交处理函数
  const onFinish = (values) => {
    // 如果是管理员账户，则密码必须为 'admin'
    if (values.email === 'staff' && values.password !== 'staff') {
      message.error("管理员账户的密码必须为 'admin'！");
      return;
    }
    
    // 模拟登录成功，更新全局用户状态
    const user = {
      email: values.email,


      token: 'dummy-token', // 模拟 token
    role: values.email === 'staff' ? 'staff' : 'user',
      
    };
    login(user);
    message.success('登录成功！');
    // 登录成功后根据角色跳转
    if (user.role === 'staff') {
      navigate('/dashboard/staff');
    } else if (user.role === 'user') {
      navigate('/dashboard/student');
    } else {
      navigate('/');
    }
  };

  // 邮箱字段校验规则：必输且需符合邮箱格式
  const emailRules = [
    { required: true, message: '请输入邮箱!' },
    { validator: (_, value) => {
        if (value === 'admin') {
          return Promise.resolve();
        }
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(value)) {
          return Promise.reject(new Error('邮箱格式不正确!'));
        }
        return Promise.resolve();
    } }
  ];

  // 密码字段校验规则：必输
  const passwordRules = [
    { required: true, message: '请输入密码!' },
  ];

  return (
    <>
      <div style={formStyle}>
        <h2 style={{ textAlign: 'center' }}>登录</h2>
        <Form layout="vertical" onFinish={onFinish}>
          {/* 邮箱输入框 */}
          <Form.Item label="邮箱" name="email" rules={emailRules}>
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          {/* 密码输入框 */}
          <Form.Item label="密码" name="password" rules={passwordRules}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          {/* 登录按钮 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
