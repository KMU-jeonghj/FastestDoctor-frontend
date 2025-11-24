import { UserType } from 'entities/user/types/user.type';
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { CardBaseStyle } from 'shared/ui/Card/CardStyle';
import Logo from 'shared/ui/Logo/Logo';
import Title from 'shared/ui/Title/Title';
import styled, { useTheme } from 'styled-components'
import { useRegisterUser } from '../hooks/useRegisterUser';
import { InputText } from 'shared/ui/Input/InputText';
import { Loader2, LucideHeart, LucideUser, RotateCcw } from 'lucide-react';
import { InputSelect } from 'shared/ui/Input/InputSelect';
import { hoverOverlay } from 'shared/styles/hoverOverlay';
import { useCurrentLocation } from '../hooks/useCurrentLocation';
import Button from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';


const UserInfoForm = () => {

  const theme = useTheme();


  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<UserType>();

  const { location, isLoading, error, fetchLocation } = useCurrentLocation();

  // 컴포넌트가 처음 렌더링될 때 자동으로 위치 조회
  useEffect(() => {
    fetchLocation();
  }, []);

  // 주소(location) 상태가 바뀌면 -> 인풋 창에 값 넣기
  useEffect(() => {
    if (location) {
      setValue('location', location);
    }
  }, [location, setValue]);

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
                      placeholder="위치를 불러오는 중..."
                      {...register("location")} // 주소 등록
                      disabled={isLoading}
                      style={{ marginTop: 0 }} // InputText 기본 마진 제거용
                    />
                    <button
                      type="button"
                      className="refresh-btn"
                      onClick={fetchLocation}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <RotateCcw size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <div className="medical-input">
              <InputText
                label={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <LucideHeart size={20} color={theme.color.primary} />
                    <span>의무 기록</span>
                  </div>
                }
                labelSize='medium'
                placeholder="과거 병력이나 알레르기 정보를 입력하세요"
                {...register("advancedInformation")}
                type='textarea'
              />
            </div>
          </div>
          <div className="submit">
            <Button
              type="submit"
              buttonSize="large"
              fontSize="medium"
              fontWeight='semibold'
              scheme="primary"
              borderRadius="medium"
              disabled={isPending}
            >
              상담 시작하기
            </Button>
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
      margin-top: 4rem;
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

                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }

                .animate-spin {
                  animation: spin 1s linear infinite;
  }

                ${hoverOverlay}
            }
        }
      }
    }

    .medical-input {
      margin-top: 3rem;
    }

    .submit {
      margin-top: 1.5rem;
    }
  }

`;

export default UserInfoForm