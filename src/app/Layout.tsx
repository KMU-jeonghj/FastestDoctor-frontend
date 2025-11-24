
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'widgets/common/Header';


export default function Layout() {
  return (
    <BackgroundStyle>
      <Header />
      <LayoutStyle>
        <Outlet />
      </LayoutStyle>
    </BackgroundStyle>

  );
}

const LayoutStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

const BackgroundStyle = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

