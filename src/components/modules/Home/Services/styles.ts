import styled from 'styled-components';

import { media } from '~/styles/media';

export const Container = styled.div`
  background: var(--black-100);
  margin-top: 5.7rem;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(3, 1fr);

  ${media.lessThan('sm')`
    display: flex;
    flex-direction: column;

    padding: 0 2.875rem;
    grid-gap: 0;
  `}
`;

export const ServiceCard = styled.div`
  background: var(--black-400);

  width: 100%;

  padding: 30px;

  display: flex;
  align-items: flex-start;

  margin-top: -40px;
  border-radius: 10px;

  border: 2px solid transparent;

  transition: all 0.2s;

  section {
    display: flex;
    flex-direction: column;

    margin-top: 8px;
    margin-left: 20px;

    strong {
      font-size: 1rem;
      font-weight: 600;
      font-family: 'Fira Code', sans-serif;
    }

    span {
      margin-top: 8px;
      color: var(--gray-100);
      font-size: 0.875rem;
    }

    button {
      margin-left: auto;
      color: var(--blue-400);
      background: transparent;
      border: 0;

      display: flex;
      align-items: center;

      font-size: 0.875rem;
      font-weight: 500;

      margin-top: 20px;

      font-family: 'Rubik', sans-serif;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        margin-left: 8px;
        margin-top: 2px;
      }
    }
  }

  ${media.greaterThan('md')`
    &:hover {
      border-color: var(--blue-400);
      transform: translateY(-15px);
    }
  `}

  ${media.lessThan('sm')`
    & + div {
      margin-top: 16px;
    }
  `}
`;
