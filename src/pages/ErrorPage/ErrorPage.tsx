import React from 'react'
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import Empty from 'shared/ui/Empty/Empty';
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <ErrorPageStyle>
      <Empty>잘못된 url 입니다.</Empty>
    </ErrorPageStyle>
  )
}

const ErrorPageStyle = styled.div`
    ${CardBaseStyle}
`;

export default ErrorPage