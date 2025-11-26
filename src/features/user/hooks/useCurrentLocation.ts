
import { useState, useEffect } from 'react';

interface AddressState {
  location: string;
  isLoading: boolean;
  error: string | null;
}

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<AddressState>({
    location: '',
    isLoading: false,
    error: null,
  });

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({ ...prev, error: '이 브라우저는 위치 정보를 지원하지 않습니다.' }));
      return;
    }

    setLocation(prev => ({ ...prev, isLoading: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // OpenStreetMap API로 좌표 -> 주소 변환
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=ko`
          );
          const data = await response.json();

          // 데이터에서 시/구/동 정보 추출 (API마다 구조가 다름)
          const addrParts = data.address;
          const city = addrParts.city || addrParts.province || '';
          const district = addrParts.borough || addrParts.district || '';
          //const road = addrParts.road || '';

          // 주소 조합
          const fullAddress = `${city} ${district}`.trim();

          setLocation({
            location: fullAddress,
            isLoading: false,
            error: null,
          });

        } catch (err) {
          setLocation({
            location: '',
            isLoading: false,
            error: '주소를 가져오는 데 실패했습니다.',
          });
        }
      },
      (error) => {
        setLocation({
          location: '',
          isLoading: false,
          error: '위치 정보 권한이 필요합니다.',
        });
      }
    );
  };

  return { ...location, fetchLocation };
};