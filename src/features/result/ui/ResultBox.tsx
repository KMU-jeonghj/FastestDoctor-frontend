import React from 'react'
import Button from 'shared/ui/Button/Button';
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import Logo from 'shared/ui/Logo/Logo';
import Title from 'shared/ui/Title/Title';
import styled from 'styled-components'
import Department from './department';

const ResultBox = () => {
  return (
    <ResultBoxStyle>
      <h1>ResultBox</h1>
      <div className="card">
        <div className="header">
          <Logo type='circle' />
          <div className="title">
            <Title fontSize='large' fontWeight='semibold'>진단 결과</Title>
            <div className="department">
              <Title fontSize='small' fontWeight='medium' color='secondText'>추천 진료과</Title>
              <Department>test</Department>
            </div>
          </div>
        </div>

        <div className="result-card">
          <div className="result-title">
            <Title>분석 결과</Title>
          </div>
          <div className="result-content">

          </div>
          <div className="buttons">

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
      }
    }


    .result-card {
      ${CardBaseStyle}
      margin-top: 2rem;
    }
  }
`;

export default ResultBox