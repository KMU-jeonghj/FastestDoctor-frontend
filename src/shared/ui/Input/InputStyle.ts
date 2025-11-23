import { FontSizeKey } from "shared/types/theme";
import styled, { css } from "styled-components";

interface LabelProps {
  $labelSize?: FontSizeKey;
}


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label<LabelProps>`
  font-size: ${({ $labelSize, theme }) =>
    ($labelSize && theme.fontSize[$labelSize]) ?
      theme.fontSize[$labelSize] : theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const RequiredMark = styled.span`
  margin-left: 0.25rem;
  color: ${({ theme }) => theme.color.errorText};
`;

export const InputWrapper = styled.div`
  margin-top: 8px;
  position: relative;
  width: 100%;
`;

export const ErrorMsg = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.color.errorText};
  margin-left: 0.5rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px; /* 버튼 사이 간격 */
  margin-top: 8px;
  width: 100%;
`;


const baseStyle = css<{ $hasError: boolean }>`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: ${({ $hasError, theme }) =>
    $hasError ? `1px solid ${theme.color.errorText}` : 'none'};
  box-shadow: ${({ theme }) => theme.shadow.default};
  font-family: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.color.secondText};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
  }

  &:-webkit-autofill {
  box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.white} inset;
  -webkit-text-fill-color: ${({ theme }) => theme.color.hoverOverlay};
  transition: background-color 9999s ease-in-out 0s;
}

`;


export const StyledInput = styled.input<{ $hasError: boolean }>`
  ${baseStyle}
`;

export const StyledTextArea = styled.textarea<{ $hasError: boolean }>`
  ${baseStyle}
  margin-top: 8px;
  min-height: 120px;
`;