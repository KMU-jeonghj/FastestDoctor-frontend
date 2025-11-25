import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode;
}

const Empty = ({ children }: Props) => {
  return (
    <EmptyStyle>
      {children}
    </EmptyStyle>
  )
}

const EmptyStyle = styled.div`
  color: ${({ theme }) => theme.color.secondText};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
`;

export default Empty