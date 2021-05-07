import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--black-800);
  border-radius: 5px;

  border: 2px solid transparent;

  transition: all 0.2s;

  width: 100%;

  section {
    display: flex;
    align-items: center;

    padding: 20px 25px;

    svg {
      color: var(--gray-100);
      margin-right: 16px;
    }

    span {
      color: var(--gray-100);
    }
  }

  hr {
    border: 1px solid var(--black-400);
  }

  textarea {
    padding: 0 10px;

    background: transparent;
    border: 0;
    font-size: 1rem;
    color: var(--white);

    margin-left: 16px;

    width: 100%;
    resize: none;

    margin-top: 20px;

    &::placeholder {
      color: var(--gray-400);
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
