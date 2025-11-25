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

const ResultBox = () => {

  const theme = useTheme();
  const { data, isLoading, error } = useGetResult();
  const navigate = useNavigate();

  if (error || !data) {
    return <Empty>데이터를 불러올 수 없습니다.</Empty>;
  }

  if (isLoading) {
      return <Loading text='결과를 분석하는 중...' />;
    }

  const {department, result} = data;

  const handleLinkToHospital = () => {

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
            <div className="department">
              <Title fontSize='small' fontWeight='medium' color='secondText'>추천 진료과</Title>
              <Department>{department}</Department>
            </div>
          </div>
        </div>

        <div className="result-card">
          <div className="result-title">
            <Title> {<Activity size={20} />} 분석 결과</Title>
          </div>
          <div className="result-content">
            {result}
          </div>
          <div className="buttons">

            <Button
              buttonSize='large'
              scheme='primary'
              fontSize='medium'
              fontWeight='semibold'
            >
              <MapPin size={16} color={theme.color.white} />
              병원 찾기
            </Button>

            <Button
            buttonSize='large'
            scheme='secondary'
            fontSize='medium'
            fontWeight='semibold'
            onClick={handleStartNewDiagnosis}
            >
              <RotateCcw size={16} color={theme.color.black}/>
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