import React from 'react'
import { Link } from 'react-router-dom';
import Logo from 'shared/ui/Logo/Logo';
import Title from 'shared/ui/Title/Title';
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderStyle>
      <Link to='/'>
        <div className='logo-box'>
          <Logo type='square' />
          <div className='title'>
            <Title fontSize='large' fontWeight='semibold'>세빠닥</Title>
            <Title fontSize='xsmall' fontWeight='medium' color='secondText'>세상에서 제일 빠른 닥터</Title>
          </div>
        </div>
      </Link>

    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  cursor: pointer;
  
  .logo-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default Header