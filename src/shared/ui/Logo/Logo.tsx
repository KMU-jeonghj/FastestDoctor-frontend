import { Stethoscope } from 'lucide-react';
import React from 'react'
import styled from 'styled-components'

type LogoType = 'circle' | 'square';

interface Props {
  type?: LogoType;
}

const Logo: React.FC<Props> = ({ type = 'circle' }) => {
  return (
    <LogoStyle type={type}>
      <Stethoscope color='white' size={type === 'circle' ? 35 : 25} style={{ margin: 'auto' }} />
    </LogoStyle>
  )
}

const LogoStyle = styled.div<{ type: LogoType }>`
  width: ${({ type }) => (type === 'circle' ? '70px' : '50px')};
  height: ${({ type }) => (type === 'circle' ? '70px' : '50px')};
  display: flex;
  background-color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.gradation.primary};
  border-radius: ${({ type, theme }) => (type === 'circle' ? theme.borderRadius.round : theme.borderRadius.medium)};
`;

export default Logo