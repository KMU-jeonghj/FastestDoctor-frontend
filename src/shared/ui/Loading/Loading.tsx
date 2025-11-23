import styled, { keyframes } from "styled-components";

interface Props {
  text?: string;
}

export const Loading = ({ text }: Props) => {
  return (
    <Container>
      <DotsWrapper>
        <Dot />
        <Dot />
        <Dot />
      </DotsWrapper>
      <LoadingText>{text}</LoadingText>
    </Container>
  );
};


const bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
    opacity: 0.5;
  } 
  40% { 
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 6px; 
  align-items: center;
`;

const Dot = styled.div`
  width: 8px;  
  height: 8px;
  background-color: ${({ theme }) => theme.color.primary}; 
  border-radius: 50%; 
  
  /* 애니메이션 적용: 이름 / 시간 / 무한반복 / 부드럽게 */
  animation: ${bounce} 1.4s infinite ease-in-out both;

  /* 시작 시점 차등으로 물결 효과 */
  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

const LoadingText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.color.secondText}; 
  font-family: inherit;
`;