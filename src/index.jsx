/*
  index.js
  主入口文件，用于将 React 应用挂载到页面上。
  使用 ReactDOM.createRoot 将 App 组件渲染到 id 为 'root' 的 DOM 元素中。
  同时包含全局状态 AuthProvider 和路由 BrowserRouter。
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import 'antd/dist/reset.css';

// 获取页面上的根 DOM 节点
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("无法找到 root 节点，请确保 index.html 中有 id 为 'root' 的元素");
}

// 使用 ReactDOM 创建根并挂载整个应用
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
