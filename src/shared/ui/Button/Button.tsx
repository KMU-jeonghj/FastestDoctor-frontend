import { ButtonHTMLAttributes, ReactNode } from 'react';
import { hoverOverlay } from 'shared/styles/hoverOverlay';
import {
  BorderRadiusKey,
  ButtonScheme,
  ButtonSize,
  FontSizeKey,
} from 'shared/types/theme';
import styled from 'styled-components';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonSize: ButtonSize;
  fontSize: FontSizeKey;
  scheme: ButtonScheme;
  borderRadius?: BorderRadiusKey;
}

const Button = ({
  children,
  buttonSize,
  fontSize,
  scheme,
  borderRadius = 'medium',
  onClick,

}: Props) => {
  return (
    <ButtonStyle
      buttonSize={buttonSize}
      fontSize={fontSize}
      scheme={scheme}
      onClick={onClick}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'scheme',
      'buttonSize',
      'fontSize',
      'borderRadius',
    ].includes(prop),
}) <Omit<Props, 'children'>>`
  font-size: ${({ theme, buttonSize, fontSize }) => (theme.buttonSize[buttonSize].fontSize ? theme.buttonSize[buttonSize].fontSize : theme.fontSize[fontSize])};
  padding: ${({ theme, buttonSize }) => theme.buttonSize[buttonSize].padding};
  width: ${({ theme, buttonSize }) => (theme.buttonSize[buttonSize].width ? theme.buttonSize[buttonSize].width : 'auto')};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background: ${({ theme, scheme }) =>
    scheme === 'primary' && theme.buttonScheme[scheme].gradation
      ? theme.buttonScheme[scheme].gradation // primary이고 gradation이 있을 때
      : theme.buttonScheme[scheme].backgroundColor}; // 그 외 (primary가 아니거나 gradation이 없을 때)
  font-weight: 600;
  border-radius: ${({ theme, borderRadius }) => theme.borderRadius[borderRadius!]};
  border: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].border
      ? `1px solid ${theme.buttonScheme[scheme].border}`
      : 'none'};
    line-height: 1;
  
  ${hoverOverlay}
`;

export default Button;
