/*
  AuthContext.js
  ----------------------------
  全局用户状态管理，通过 React Context 提供登录、登出以及保存 currentUser 状态。
  currentUser 对象包含用户的 email, role, idE, token 等信息。
*/

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 初始化全局用户状态为空
  const [currentUser, setCurrentUser] = useState(null);

  // 登录方法：更新全局用户状态
  const login = (user) => {
    setCurrentUser(user);
  };

  // 登出方法：清空全局用户状态
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
