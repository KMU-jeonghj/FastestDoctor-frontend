import React from 'react'
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import styled from 'styled-components'
import { useGetQuestion } from '../hooks/useGetQuestion';
import { useAnswer } from '../hooks/useAnswer';
import { Loading } from 'shared/ui/Loading/Loading';
import Title from 'shared/ui/Title/Title';

const QuestionBox = () => {

  const { data, isLoading, error } = useGetQuestion();
  const { mutate, isPending } = useAnswer();

  const { question, answer } = data;

  if (isLoading) {
    return <Loading text='AI가 분석하는 중...' />;
  }

  return (
    <QuestionBoxStyle>
      <div className="card">
        <div className="question">
          <Title fontSize='medium' fontWeight='semibold'>{question}</Title>
        </div>

        <div className="answer-group">

        </div>

        <div className="prev-button">

        </div>
      </div>
    </QuestionBoxStyle>
  )
}

const QuestionBoxStyle = styled.div`

  .card {
    ${CardBaseStyle}
  }
`;

export default QuestionBox