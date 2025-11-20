import React from 'react'
import Button from 'shared/ui/Button/Button';
import { InputText } from 'shared/ui/InputText/InputText';
import styled from 'styled-components'

const DiagnosisPage = () => {
  return (
    <DiagnosisPageStyle>
      <h1>DiagnosisPage</h1>
      <Button buttonSize='medium' fontSize='medium' fontWeight='semibold'  scheme='primary'>상담하기</Button>
      <p />
      <Button buttonSize='medium' fontSize='medium' fontWeight='semibold' scheme='secondary'>상담하기</Button>
      <p />
      <Button buttonSize='small' fontSize='xsmall' scheme='option'>남성</Button>
      <p />
      <Button buttonSize='small' fontSize='xsmall' scheme='optionActive'>남성</Button>
      <p />
      <Button buttonSize='small' fontSize='medium' scheme='prev'>이전 질문으로</Button>
      <p />
      <Button buttonSize='large' fontSize='medium' fontWeight='semibold' scheme='answer'>답변하기</Button>
      <div className='input-box'>
        <InputText name="test" placeholder="이름을 입력하세요" />
      </div>
      

    </DiagnosisPageStyle>
  )
}

const DiagnosisPageStyle = styled.div`
  .input-box {
    margin-top: 1rem;
  }
`;

export default DiagnosisPage