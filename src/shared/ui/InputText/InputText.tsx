import styled from "styled-components";


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  name: string;
  error?: string;
  required?: boolean;
}

export const InputText = ({ label, placeholder, name, error, required, ...rest }: Props) => {
  return <InputTextStyle type="text" placeholder={placeholder} name={name} required={required} {...rest} />;
}

// big, small 분기
// 유효성 검사 추가

const InputTextStyle = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid ${({theme}) =>  theme.color.border};
    border-radius: ${({theme}) => theme.borderRadius.medium};
    font-size: ${({theme}) => theme.fontSize.xsmall};
    line-height: 1.5;
    color: ${({theme}) => theme.color.secondText};
    box-shadow: ${({theme}) => theme.shadow.default};
`;