import { ChevronRight } from 'lucide-react';
import React from 'react'
import styled, { useTheme } from 'styled-components'

const AnswerMark = () => {

    const theme = useTheme();

  return (
    <AnswerMarkStyle>
        <ChevronRight size={24} color={theme.color.primary} />
    </AnswerMarkStyle>
  )
}

const AnswerMarkStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: ${({ theme }) => theme.borderRadius.round};
    border: 2px solid ${({ theme }) => theme.color.secondary};
`;

export default AnswerMark