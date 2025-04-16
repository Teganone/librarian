/*
  LoginForm.jsx
  用户登录组件，基于 Ant Design 的 Form 组件构建。
  包含邮箱和密码字段，表单提交后模拟登录成功，更新全局用户状态并跳转到主页。
*/

import React, { useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import { AuthContext } from '../context/AuthContext';
import useNavigator from '../navigation/Navigator';

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useContext(AuthContext);
  const navigator = useNavigator();

  // 表单提交成功回调，更新用户状态并跳转至首页
  const onFinish = (values) => {
    console.log('登录提交的数据:', values);
    // 模拟成功登录，依实际需求验证后填充相应信息
    const mockUser = {
      email: values.email,
      role: 'student', // 模拟角色，实际场景应由后端返回
      idE: '123456',
      token: 'dummy-token'
    };

    // 更新全局用户状态
    login(mockUser);
    message.success('登录成功！');
    navigator.goToHome();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ maxWidth: 400, width: '100%' }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="邮箱"
        rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '邮箱格式不正确' }]}
      >
        <Input placeholder="请输入邮箱" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
