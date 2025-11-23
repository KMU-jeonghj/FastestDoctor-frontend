import { UserType } from 'entities/user/types/user.type';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import Logo from 'shared/ui/Logo/Logo';
import Title from 'shared/ui/Title/Title';
import styled, { useTheme } from 'styled-components'
import { useRegisterUser } from '../hooks/useRegisterUser';
import { InputText } from 'shared/ui/Input/InputText';
import { LucideUser, RotateCcw } from 'lucide-react';
import { InputSelect } from 'shared/ui/Input/InputSelect';
import Button from 'shared/ui/Button/Button';
import { hoverOverlay } from 'shared/styles/hoverOverlay';


const UserInfoForm = () => {

  const theme = useTheme();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserType>();

  const { mutate, isPending } = useRegisterUser();

  const onSubmit = (data: UserType) => {
    mutate(data);
  };

  return (
    <UserInfoFormStyle>

      <div className="card">
        <div className="header">
          <Logo type='circle' />
          <div className="title">
            <Title fontSize='large' fontWeight='semibold'>AI 의료 상담 시작하기</Title>
            <Title fontSize='small' fontWeight='medium' color='secondText'>정확한 진단을 위해 정보를 입력해주세요.</Title>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <div className="base-input-container">
              <Title fontSize='medium' fontWeight='semibold'>
                <LucideUser
                  color={theme.color.primary}
                  size={20}
                  style={{ marginRight: '4px' }}
                />
                <span>기본 정보</span>
              </Title>
              <div className="base-input-group">
                <InputText
                  label="이름"
                  labelSize='small'
                  placeholder="이름을 입력하세요"
                  {...register("name", { required: "이름은 필수입니다." })}
                  error={errors.name?.message}
                />
                <InputText
                  label="나이"
                  labelSize='small'
                  placeholder="나이를 입력하세요"
                  {...register("age", { required: "나이는 필수입니다." })}
                  error={errors.age?.message}
                />
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "성별을 선택해주세요." }}
                  render={({ field: { onChange, value } }) => (
                    <InputSelect
                      label="성별"
                      labelSize='small'
                      name="gender"
                      value={value} // 현재 값 (0 또는 1)
                      onChange={onChange} // 선택 시 값 변경
                      options={[
                        { label: '남성', value: 0 },
                        { label: '여성', value: 1 },
                      ]}
                      error={errors.gender?.message}
                    />
                  )}
                />

                <div className="location-field">
                  <div className="location-input-box">
                    <InputText
                      label='현재 위치'
                      labelSize='small'
                      placeholder="서울시 성북구"
                      {...register("location")} // 주소 등록
                      style={{ marginTop: 0 }} // InputText 기본 마진 제거용
                    />
                    <button type="button" className="refresh-btn">
                      <RotateCcw size={16} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <div className="medical-input">

            </div>
          </div>
          <div className="submit">

          </div>
        </form>

      </div>
    </UserInfoFormStyle>
  )
}

const UserInfoFormStyle = styled.div`

  .card {
    ${CardBaseStyle}

    .header {
      display: flex;          
      flex-direction: column; 
      align-items: center;   
      text-align: center;    
      gap: 1.5rem; 
      
      .title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    .base-input-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .base-input-group {
        display: grid;
        grid-template-columns: 1fr 1fr; 
        column-gap: 2rem; /* 좌우 간격 */
        row-gap: 1rem;  /* 상하 간격 */
      }

      .location-field {
        display: flex;
        flex-direction: column;
        gap: 4px;


        .location-input-box {
            position: relative;
            display: flex;
            align-items: flex-end; /* 인풋과 버튼 높이 맞춤 */
            gap: 8px;
            
            /* InputText가 width 100%를 가져가도록 */
            > div { flex: 1; } 

            .refresh-btn {
                padding: 0.5rem 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid ${({ theme }) => theme.color.border};
                border-radius: ${({ theme }) => theme.borderRadius.medium};
                background: ${({ theme }) => theme.color.background};
                cursor: pointer;
                color: ${({ theme }) => theme.color.secondText};

                ${hoverOverlay}
            }
        }
      }
    }
  }

`;

export default UserInfoForm