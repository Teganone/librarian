/*
  Navigator.js
  ----------------------------
  定义 Navigator 对象，提供页面跳转方法。
  通过自定义 hook 使用 react-router 的 useNavigate 实现页面跳转，如 goToHome、goToLogin 以及 goToRegister。
*/

import { useNavigate } from 'react-router-dom';

const useNavigator = () => {
  const navigate = useNavigate();
  return {
    // 跳转到主页
    goToHome: () => navigate('/'),
    // 跳转到登录页面
    goToLogin: () => navigate('/login'),
    // 跳转到注册页面
    goToRegister: () => navigate('/register')
  };
};

export default useNavigator;
