import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 4.063rem;
  padding: 0 1.5rem;
  background: var(--black-800);
  border-radius: 0.313rem;
  display: flex;
  align-items: center;
  border: 0.125rem solid transparent;
  transition: all 0.2s;
  width: 100%;

  svg {
    color: var(--gray-100);
  }

  input {
    background: transparent;
    border: 0;
    font-size: 1rem;
    color: var(--white);
    margin-left: 1rem;
    width: 100%;

    &::placeholder {
      color: var(--gray-100);
    }
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: var(--pink-500);
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      svg {
        color: var(--pink-500);
      }
    `}
`;
