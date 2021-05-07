import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 65px;
  padding: 0 25px;

  background: var(--black-800);
  border-radius: 5px;

  display: flex;
  align-items: center;

  border: 2px solid transparent;

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

    margin-left: 16px;

    width: 100%;

    &::placeholder {
      color: var(--gray-100);
    }
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: var(--blue-400);
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      svg {
        color: var(--blue-400);
      }
    `}
`;
