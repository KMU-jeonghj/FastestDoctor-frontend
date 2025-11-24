import React from 'react'
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import styled, { useTheme } from 'styled-components'
import { useGetQuestion } from '../hooks/useGetQuestion';
import { useAnswer } from '../hooks/useAnswer';
import { Loading } from 'shared/ui/Loading/Loading';
import Title from 'shared/ui/Title/Title';
import Button from 'shared/ui/Button/Button';
import AnswerMark from './AnswerMark';
import { ArrowLeft } from 'lucide-react';

const QuestionBox = () => {

  const theme = useTheme();
  const { data, isLoading, error } = useGetQuestion();
  const { mutate, isPending } = useAnswer();

  if (error || !data) {
    return <div>데이터를 불러올 수 없습니다.</div>; 
  }

  const { question, answer } = data;

  if (isLoading) {
    return <Loading text='AI가 분석하는 중...' />;
  }

  return (
    <QuestionBoxStyle>
      <div className="card">
        <div className="question">
          <Title fontSize='large' fontWeight='semibold'>{question}</Title>
        </div>

        <div className="answer-group">
          {answer.map((item, index) => (
            <Button 
            key={index}
            buttonSize='large' 
            fontSize='medium' 
            fontWeight='semibold'
            scheme='answer'
            >
              <AnswerMark />
              {item}
              </Button>
          ))}
        </div>

        <div className="prev-button">
          <Button 
            buttonSize='small' 
            fontSize='medium' 
            scheme='prev'
          >
            <ArrowLeft 
            size={18} color={theme.color.secondText}/>
            이전 질문으로
          </Button>
        </div>
      </div>
    </QuestionBoxStyle>
  )
}

const QuestionBoxStyle = styled.div`

  .card {
    ${CardBaseStyle}

    .question {

      & > * {
        font-size: 1.25rem; 

      }
    }


    .answer-group {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;  
  }


    .answer-group button {
      display: flex;
      align-items: center;
      gap: 1rem; 
      padding-left: 1rem;


    }

    .prev-button {
      margin-top: 3rem;
      display: flex; 
    }

    .prev-button button {
      display: flex;
      align-items: center;
      gap: 1rem; 

      & > svg {
      transform: translateY(-1px); /* -1px ~ -2px 정도 위로 올림 */
    }
    }
`;

export default QuestionBox