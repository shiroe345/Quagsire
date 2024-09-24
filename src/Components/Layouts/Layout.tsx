import React from 'react';
import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { Box } from '@chakra-ui/react';
import Dashboard from '../Dashboard/Dashboard'; 
import Login from '../Login/Login';

const Layout = (props: { page: string }) => {
  const { page } = props;
  const cookies = new Cookies();

  // 檢查 Cookies 中是否存在 username
  const username = cookies.get('username');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  // 如果當前頁面是 login，不進行重定向檢查
  if (page === 'login') {
    return <Login />;
  }

  // 如果沒有 username 或者用戶未按下 login，重定向到 /login
  if (!username || !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // 將不同的頁面屬性映射到對應的組件
  const pageMap: Record<string, JSX.Element> = {
    dashboard: <Dashboard />,
    login: <Login />
  };

  // 渲染對應的組件，如果沒有匹配到則重定向到 /login
  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.100">
      {pageMap[page] || <Navigate to="/login" />}
    </Box>
  );
};

export default Layout;
