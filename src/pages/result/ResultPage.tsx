import ResultBox from 'features/result/ui/ResultBox';
import React from 'react'
import styled from 'styled-components'

const ResultPage = () => {
  return (
    <ResultPageStyle>
      <h1>ResultPage</h1>
      <ResultBox />
    </ResultPageStyle>
  )
}

const ResultPageStyle = styled.div``;

export default ResultPage