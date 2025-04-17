import React from 'react';
// 使用重新设计的公共首页组件
import PublicHome from '../components/PublicHome';

/**
 * Home 页面组件
 * 原来的首页位置，现在重定向到新版公共首页组件 PublicHome
 */
const Home = () => {
  return <PublicHome />;
};

export default Home;
