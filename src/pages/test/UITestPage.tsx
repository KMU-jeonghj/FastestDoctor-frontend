import React from 'react'
import Button from 'shared/ui/Button/Button';
import Empty from 'shared/ui/Empty/Empty';
import { InputText } from 'shared/ui/InputText/InputText';
import { Loading } from 'shared/ui/Loading/Loading';
import Logo from 'shared/ui/Logo/Logo';
import Title from 'shared/ui/Title/Title';
import styled from 'styled-components'
import Header from 'widgets/common/Header';

const UITestPage = () => {
  return (
    <UITestPageStyle>
      <h1>UITestPage</h1>
      <Button buttonSize='medium' fontSize='medium' fontWeight='semibold' scheme='primary'>상담하기</Button>
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
      <div className='gap'>
        <InputText label='이름' labelSize='small' name="test" placeholder="이름을 입력하세요" />
      </div>
      <InputText
        label='상담 내용'
        name="test2"
        type="textarea"
        placeholder="상담 내용을 입력하세요"
      />

      <Title fontSize='large'>진단 페이지</Title>
      <Title fontSize='medium' fontWeight='medium' color='secondText'>진단 페이지 서브타이틀</Title>
      <div className='gap'>
        <Loading text='AI가 분석하는 중...' />
      </div>
      <div className='gap'>
        <Logo />
        <Logo type='square' />
      </div>
      <div className='gap'>
        <Header />
      </div>
      <div className='gap'>
        <Empty text='내용이 없습니다.' />
      </div>



    </UITestPageStyle>
  )
}

const UITestPageStyle = styled.div`
  .gap {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
`;

export default UITestPage