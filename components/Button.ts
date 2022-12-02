import styled, { css } from 'styled-components';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
}

export const Button = styled.button<ButtonProps>`
  appearance: none;
  user-select: none;
  background: none;
  border: none;
  padding: 0;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: yellow;
      color: black;
    `}
`;
