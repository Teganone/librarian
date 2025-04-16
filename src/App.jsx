/*
  App.js
  主应用组件，用于定义整个应用的路由
  使用 react-router-dom 的 Routes 和 Route 来定义页面跳转规则
*/

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 页面组件
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      {/* 首页路由 */}
      <Route path="/" element={<Home />} />
      {/* 登录页面路由 */}
      <Route path="/login" element={<Login />} />
      {/* 注册页面路由 */}
      <Route path="/register" element={<Register />} />
      {/* 未匹配路由重定向至首页 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
