/*
  Home.jsx
  ----------------------------
  首页组件，用于展示用户主页。
  如果用户已登录，则显示欢迎信息及登出按钮；
  如果用户未登录，则提供登录和注册跳转按钮。
*/

import React, { useContext } from 'react';
import { Button } from 'antd';
import { AuthContext } from '../context/AuthContext';
import LogoutButton from '../components/LogoutButton';
import useNavigator from '../navigation/Navigator';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const navigator = useNavigator();

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1>图书馆管理系统主页</h1>
      {currentUser ? (
        <div>
          <p>欢迎, {currentUser.email} (角色: {currentUser.role})!          </p>
          {/* 显示登出按钮 */}
          <LogoutButton />
        </div>
      ) : (
        <div>
          <p>您尚未登录。</p>
          <div style={{ marginTop: '16px' }}>
            <Button type="primary" onClick={() => navigator.goToLogin()} style={{ marginRight: '8px' }}>
              登录
            </Button>
            <Button onClick={() => navigator.goToRegister()}>
              注册
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
