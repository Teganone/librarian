import React, { useContext } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

// LogoutButton component: an independent component using Ant Design Button
// when clicked, it clears the global user state, simulates a logout, and navigates back to the homepage with a success message.
const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    message.success('登出成功！');
    navigate('/');
  };

  return (
    <Button type="primary" danger onClick={handleLogout}>
      登出
    </Button>
  );
};

export default LogoutButton;
