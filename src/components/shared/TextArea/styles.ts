import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--black-800);
  border-radius: 0.313rem;
  border: 0.125rem solid transparent;
  transition: all 0.2s;
  width: 100%;

  section {
    display: flex;
    align-items: center;
    padding: 1.25rem 1.563rem;

    svg {
      color: var(--gray-100);
      margin-right: 1rem;
    }

    span {
      color: var(--gray-100);
    }
  }

  hr {
    border: 0.063rem solid var(--black-400);
  }

  textarea {
    padding: 0 0.625rem;
    background: transparent;
    border: 0;
    font-size: 1rem;
    color: var(--white);
    margin-left: 1rem;
    width: 90%;
    resize: none;
    height: 7.5rem;
    margin-top: 1.25rem;

    &::placeholder {
      color: var(--gray-400);
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
