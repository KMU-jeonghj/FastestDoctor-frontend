
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import UserInfoPage from 'pages/user/UserInfoPage';
import DiagnosisPage from 'pages/diagnosis/DiagnosisPage';
import ResultPage from 'pages/result/ResultPage';
import UITestPage from 'pages/test/UITestPage';

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<UserInfoPage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/uitest" element={<UITestPage />} />
      </Route>
    </Routes>
  );
};
