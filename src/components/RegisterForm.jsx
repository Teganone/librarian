import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';

// RegisterForm component handles the registration form for the library management system.
// It uses Ant Design's Form component with vertical layout, max width 400px centered.
// It includes fields for Email, Password, Student/Worker ID, Role selection, and conditionally Staff Key if role is "staff".
const RegisterForm = () => {
  // State to track if the selected role is "staff"
  const [isStaff, setIsStaff] = useState(false);

  // Inline style for centering form with max width 400px
  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
  };

  // Function called on form submission
  const onFinish = (values) => {
    console.log('Registration form submitted:', values);
    message.success('注册成功！');
    // Add further logic for registration if needed
  };

  // Handle role change to determine whether to show Staff Key input
  const handleRoleChange = (value) => {
    setIsStaff(value === 'staff');
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>注册</h2>
      <Form layout="vertical" onFinish={onFinish}>
        {/* Email input field */}
        <Form.Item
          label="邮箱"
          name="email"
          rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '请输入有效的邮箱地址' }]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        {/* Password input field */}
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        {/* Student/Worker ID input field */}
        <Form.Item
          label="学号/工号"
          name="id"
          rules={[{ required: true, message: '请输入学号/工号' }]}
        >
          <Input placeholder="请输入学号/工号" />
        </Form.Item>
        {/* Role selection dropdown */}
        <Form.Item
          label="角色"
          name="role"
          rules={[{ required: true, message: '请选择角色' }]}
        >
          <Select placeholder="请选择角色" onChange={handleRoleChange}>
            <Select.Option value="student">学生</Select.Option>
            <Select.Option value="staff">职员</Select.Option>
          </Select>
        </Form.Item>
        {/* Conditional Staff Key field, only shown when role is "staff" */}
        {isStaff && (
          <Form.Item
            label="Staff Key"
            name="staffKey"
            rules={[{ required: true, message: '请输入 staff key' }]}
          >
            <Input placeholder="请输入 staff key" />
          </Form.Item>
        )}
        {/* Submit button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
