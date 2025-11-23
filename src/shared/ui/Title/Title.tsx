import React from 'react'
import { ColorKey, FontSizeKey, FontWeightKey } from 'shared/types/theme';
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode;
  fontSize?: FontSizeKey;
  fontWeight?: FontWeightKey;
  color?: ColorKey;
}

const Title = ({ children, fontSize, fontWeight, color }: Props) => {
  return (
    <TitleStyle fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </TitleStyle>
  )
}

const TitleStyle = styled.div<{ fontSize?: FontSizeKey; fontWeight?: FontWeightKey; color?: ColorKey }>`
  font-size: ${({ fontSize, theme }) =>
    (fontSize && theme.fontSize[fontSize]) ? theme.fontSize[fontSize] : theme.fontSize.medium};
  font-weight: ${({ fontWeight, theme }) =>
    (fontWeight && theme.fontWeight[fontWeight]) ? theme.fontWeight[fontWeight] : theme.fontWeight.semibold};
  color: ${({ color, theme }) => (color && theme.color[color]) ? theme.color[color] : theme.color.black};
`;

export default Title