import React, { useState } from 'react';
import { Box, Button, Heading, Input, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Login = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  // 使用 useState 來保存 username 和 password 的輸入
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 用來顯示錯誤信息的狀態
  const [errorMessage, setErrorMessage] = useState('');

  // Chakra UI 的 useDisclosure，用來控制 Modal 的開啟與關閉
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    // 檢查是否有輸入 username 和 password
    if (username && password) {
      if (username === 'admin' && password === 'admin') {
        // 設置 Cookies 中的 username
        cookies.set('username', username, { path: '/'});

        // 設置 localStorage 標記，表示用戶已登錄
        localStorage.setItem('isLoggedIn', 'true');

        // 重定向到 dashboard
        navigate('/dashboard');
      } else {
        // 帳號或密碼錯誤，設置錯誤信息並打開提示框
        setErrorMessage('帳號或密碼錯誤');
        onOpen(); // 打開 Modal
      }
    } else {
      // 如果有欄位為空，設置錯誤信息並打開提示框
      setErrorMessage('請輸入帳號和密碼');
      onOpen(); // 打開 Modal
    }
  };

  // 當用戶按下 "確認" 按鈕時，重定向到登入頁面
  const handleConfirm = () => {
    onClose(); // 關閉 Modal
    navigate('/login'); // 返回登入頁面
  };

  // 處理按下 Enter 鍵的事件
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // 阻止 Enter 鍵的默認行為造成Modal的關閉
      handleLogin();
    }
  };

  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.100">
      <VStack spacing={6} boxShadow="lg" p={8} bg="white" borderRadius="md">
        <Heading size="lg" color="teal.600">水資源介紹</Heading>

        {/* 用戶名輸入框 */}
        <Input 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          onKeyDown={handleKeyDown}
        />

        {/* 密碼輸入框 */}
        <Input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          onKeyDown={handleKeyDown}
        />

        {/* 登入按鈕 */}
        <Button colorScheme="teal" width="100%" onClick={handleLogin}>
          登入
        </Button>
      </VStack>

      {/* 彈出提示框 Modal */}
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>錯誤提示</ModalHeader>
          <ModalBody>
            {errorMessage}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleConfirm}>
              確定
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;
