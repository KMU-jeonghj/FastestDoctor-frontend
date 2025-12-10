
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import UserInfoPage from 'pages/user/UserInfoPage';
import DiagnosisPage from 'pages/diagnosis/DiagnosisPage';
import ResultPage from 'pages/result/ResultPage';
import UITestPage from 'pages/test/UITestPage';
import ProtectedRoute from './ProtectedRoute';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

export const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<UserInfoPage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>

        <Route path="/uitest" element={<UITestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
