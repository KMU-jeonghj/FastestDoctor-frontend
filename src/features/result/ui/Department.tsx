import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode;
}


const Department = ({ children }: Props) => {
  return (
    <DepartmentStyle>
      {children}
    </DepartmentStyle>
  )
}

const DepartmentStyle = styled.div`

  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.secondary};
  padding: ${({ theme }) => theme.buttonSize.xsmall.padding};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.round};

`;

export default Department