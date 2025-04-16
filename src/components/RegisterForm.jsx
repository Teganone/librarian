/*
  RegisterForm.jsx
  用户注册组件，基于 Ant Design Form 实现。
  包含邮箱、密码、学号/工号、角色选择及动态显示的 staff key 字段。
  提交表单后打印提交数据并显示成功提示。
*/

import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';

const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();
  // 根据角色是否为 'staff' 来控制是否显示 staff key 字段
  const [isStaff, setIsStaff] = useState(false);

  // 监听表单值变化，特别是 role 字段的变化
  const onValuesChange = (changedValues) => {
    if (changedValues.role !== undefined) {
      setIsStaff(changedValues.role === 'staff');
    }
  };

  // 表单提交成功后的回调
  const onFinish = (values) => {
    console.log('注册提交的数据:', values);
    // 模拟注册成功
    message.success('注册成功！');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      style={{ maxWidth: 400, width: '100%', margin: '0 auto' }}
    >
      {/* 邮箱输入项，必填且校验邮箱格式 */}
      <Form.Item
        name="email"
        label="邮箱"
        rules=[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '邮箱格式不正确' }
        ]
      >
        <Input placeholder="请输入邮箱" />
      </Form.Item>

      {/* 密码输入项，必填 */}
      <Form.Item
        name="password"
        label="密码"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>

      {/* 学号/工号输入项，必填 */}
      <Form.Item
        name="idE"
        label="学号/工号"
        rules={[{ required: true, message: '请输入学号/工号' }]}
      >
        <Input placeholder="请输入学号/工号" />
      </Form.Item>

      {/* 角色选择，下拉选项包括学生和职员 */}
      <Form.Item
        name="role"
        label="角色选择"
        rules={[{ required: true, message: '请选择角色' }]}
      >
        <Select placeholder="请选择角色">
          <Option value="student">学生</Option>
          <Option value="staff">职员</Option>
        </Select>
      </Form.Item>

      {/* 当角色选择为职员时，动态显示 Staff Key 字段 */}
      {isStaff && (
        <Form.Item
          name="staffKey"
          label="Staff Key"
          rules={[{ required: true, message: '请输入 staff key' }]}
        >
          <Input placeholder="请输入 staff key" />
        </Form.Item>
      )}

      {/* 提交按钮 */}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
