import { forwardRef } from "react";
import { ErrorMsg, InputWrapper, Label, RequiredMark, StyledInput, StyledTextArea, Wrapper } from "./InputStyle";
import { FontSizeKey } from "shared/types/theme";

type InputType = 'text' | 'textarea';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelSize?: FontSizeKey
  placeholder?: string;
  name: string;
  error?: string;
  required?: boolean;
  type?: InputType;
}

export const InputText = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  Props
>(
  (
    { label, labelSize = 'medium', name, error, required, type = 'text', placeholder, ...rest }, ref,
  ) => {
    const isTextArea = type === 'textarea';
    const isText = type === 'text';

    return (
      <Wrapper>
        {label && (
          <Label htmlFor={name} $labelSize={labelSize}>
            {label}
            {required && <RequiredMark>*</RequiredMark>}
          </Label>
        )}
        <InputWrapper>
          {isTextArea ? (
            <StyledTextArea
              id={name}
              name={name}
              placeholder={placeholder}
              $hasError={!!error}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <StyledInput
              id={name}
              name={name}
              placeholder={placeholder}
              $hasError={!!error}
              ref={ref as React.Ref<HTMLInputElement>}
              {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </InputWrapper>
      </Wrapper>
    );
  });



