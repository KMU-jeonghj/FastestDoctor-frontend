import { useUserStore } from 'entities/user/store/userStore';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


const ProtectedRoute = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      alert("잘못된 접근입니다. 정보를 먼저 입력해주세요.");
      navigate('/', { replace: true });
    }
  }, [userInfo, navigate]);

  // 유저 정보가 없으면 아무것도 보여주지 않고 리다이렉트 대기
  if (!userInfo) return null;

  // 유저 정보가 있으면 자식 라우트(Outlet)를 보여줌
  return <Outlet />;
};

export default ProtectedRoute;