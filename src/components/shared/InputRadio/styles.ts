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
  width: 1.563rem;
  height: 1.563rem;
  border: 0.125rem solid var(--pink-500);
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0.188rem;
    left: 0.188rem;
    width: 0.938rem;
    height: 0.938rem;
    transition: all 0.3s;
    background: var(--pink-500);
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
