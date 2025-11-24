import QuestionBox from 'features/diagnosis/ui/QuestionBox';
import React from 'react'
import styled from 'styled-components'

const DiagnosisPage = () => {
  return (
    <DiagnosisPageStyle>
      <QuestionBox />
    </DiagnosisPageStyle>
  )
}

const DiagnosisPageStyle = styled.div``;

export default DiagnosisPage