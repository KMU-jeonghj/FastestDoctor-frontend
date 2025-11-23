import { css } from "styled-components";

export const CardBaseStyle = css`

  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadow.default};
  background-color: ${({ theme }) => theme.color.white};
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;


`;
