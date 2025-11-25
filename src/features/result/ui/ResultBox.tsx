import React from 'react'
import Button from 'shared/ui/Button/Button';
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import Logo from 'shared/ui/Logo/Logo';
import Title from 'shared/ui/Title/Title';
import styled, { useTheme } from 'styled-components'
import Department from './Department';
import { useGetResult } from '../hooks/useGetResult';
import { useNavigate } from 'react-router-dom';
import Empty from 'shared/ui/Empty/Empty';
import { Loading } from 'shared/ui/Loading/Loading';
import { Activity, MapPin, RotateCcw } from 'lucide-react';
import { useUserStore } from 'entities/user/store/userStore';

const ResultBox = () => {

  const theme = useTheme();
  const userInfo = useUserStore((state) => state.userInfo);
  const { data, isLoading, error } = useGetResult();
  const navigate = useNavigate();

  if (error) {
    return <Empty>데이터를 불러올 수 없습니다.</Empty>;
  }

  if (isLoading) {
    return <Loading text='결과를 분석하는 중...' />;
  }

  const hasData = !!data;
  const { department, result } = data || {};

  const handleLinkToHospital = () => {
    const location = userInfo?.location || '';

    // 검색어 조합 
    const query = `${location} ${department}`;

    // 네이버 지도 검색 URL 생성 (encodeURIComponent -> 한글 깨짐 방지)
    const url = `https://map.naver.com/p/search/${encodeURIComponent(query)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const handleStartNewDiagnosis = () => {
    navigate('/')
  }

  return (
    <ResultBoxStyle>
      <div className="card">
        <div className="header">
          <Logo type='circle' />
          <div className="title">
            <Title fontSize='large' fontWeight='semibold'>진단 결과</Title>
            {hasData && department && (
              <div className="department">
                <Title fontSize='small' fontWeight='medium' color='secondText'>추천 진료과</Title>
                <Department>{department}</Department>
              </div>
            )}
          </div>
        </div>

        <div className="result-card">
          <div className="result-title">
            <Title> {<Activity size={20} />} 분석 결과</Title>
          </div>
          <div className="result-content">
            {hasData ? (
              result
            ) : (
              <Empty>데이터를 불러올 수 없습니다.</Empty>
            )}
          </div>
          <div className="buttons">

            {hasData && (
              <Button
                buttonSize='large'
                scheme='primary'
                fontSize='medium'
                onClick={handleLinkToHospital}
              >
                <MapPin size={16} color={theme.color.white} />
                병원 찾기
              </Button>
            )}

            <Button
              buttonSize='large'
              scheme='secondary'
              fontSize='medium'
              fontWeight='semibold'
              onClick={handleStartNewDiagnosis}
            >
              <RotateCcw size={16} color={theme.color.black} />
              새 상담 시작
            </Button>

          </div>

        </div>



      </div>
    </ResultBoxStyle>
  )
}

const ResultBoxStyle = styled.div`

  .card {
    ${CardBaseStyle}


    .header {
      display: flex;          
      flex-direction: column; 
      align-items: center;   
      text-align: center;    
      gap: 1.5rem; 
      
      .title {
        display: flex;
        flex-direction: column;
        gap: 1rem;


        .department {
          display: flex;
          gap: 0.5rem;
          align-items: center;

          & > :last-child {

            transform: translateY(1px); 
            
          }

        }
      }
    }


    .result-card {
      ${CardBaseStyle}
      margin-top: 2rem;

      .result-title {

        & > * {
        font-size: 1.25rem; 

      }
      }

      .result-content {
        margin-top: 2rem;
      }

    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 3rem;
      width: 100%;
    }

    .buttons button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem; 
      flex: 1;

      & > svg {
        transform: translateY(-1px); /* -1px ~ -2px 정도 위로 올림 */
    }

    }
  }
`;

export default ResultBox