import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 登錄頁面 */}
                <Route path="/login" element={<Layout page="login" />} />
                
                {/* 所有受保護的路由由 Layout 負責身份驗證 */}
                <Route path="/dashboard" element={<Layout page="dashboard" />} />
                <Route path="/" element={<Layout page="dashboard" />} />
                <Route path="*" element={<Layout page="login" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
