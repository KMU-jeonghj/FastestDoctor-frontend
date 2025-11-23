import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string;
}

const Empty = ({ text }: Props) => {
  return (
    <EmptyStyle>
      {text}
    </EmptyStyle>
  )
}

const EmptyStyle = styled.div`
  color: ${({ theme }) => theme.color.secondText};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
`;

export default Empty