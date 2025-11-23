import UserInfoForm from 'features/user/ui/UserInfoForm';
import React from 'react'
import styled from 'styled-components'

const UserInfoPage = () => {
  return (
    <UserInfoPageStyle>
      <h1>UserInfoPage</h1>
      <UserInfoForm />
    </UserInfoPageStyle>
  )
}

const UserInfoPageStyle = styled.div``;

export default UserInfoPage