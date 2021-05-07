import styled, { css } from 'styled-components';

interface CircleProps {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    color: var(--white);
    font-size: 1rem;
    font-family: 'Fira Code', sans-serif;
    font-weight: 500;
  }
`;

export const Circle = styled.button<CircleProps>`
  position: relative;

  background: transparent;
  width: 25px;
  height: 25px;

  border: 2px solid var(--blue-400);

  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;

    top: 3px;
    left: 3px;

    width: 15px;
    height: 15px;

    transition: all 0.3s;

    background: var(--blue-400);
    border-radius: 50%;

    opacity: 0;
    visibility: hidden;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::before {
        opacity: 1;
        visibility: visible;
      }
    `}
`;
