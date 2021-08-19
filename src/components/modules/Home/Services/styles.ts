import styled from 'styled-components';

import { media } from '~/styles/media';

export const Container = styled.section`
  background: var(--black-100);
  margin-top: 5.7rem;
`;

export const Content = styled.div`
  max-width: 68.75rem;
  margin: 0 auto;
  display: grid;
  grid-gap: 2.188rem;
  grid-template-columns: repeat(3, 1fr);

  ${media.lessThan('md')`
    display: flex;
    flex-direction: column;
    padding: 0 2.875rem;
    grid-gap: 0;

    max-width: 100vw;
  `}

  ${media.lessThan('xs')`
    padding: 0 2rem;
  `}
`;

export const ServiceCard = styled.div`
  background: var(--black-400);
  width: 100%;
  padding: 1.875rem;
  display: flex;
  align-items: flex-start;
  margin-top: -2.5rem;
  border-radius: 0.75rem;
  border: 0.125rem solid transparent;
  transition: all 0.2s;

  section {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-left: 1.25rem;

    strong {
      font-size: 1rem;
      font-weight: 600;
      font-family: 'Fira Code', sans-serif;
    }

    span {
      margin-top: 0.5rem;
      color: var(--gray-100);
      font-size: 0.875rem;
    }

    button {
      margin-left: auto;
      color: var(--pink-500);
      background: transparent;
      border: 0;
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 500;
      margin-top: 1.25rem;
      font-family: 'Rubik', sans-serif;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      svg {
        margin-left: 0.5rem;
        margin-top: 0.125rem;
      }
    }
  }

  ${media.greaterThan('md')`
    &:hover {
      border-color: var(--pink-500);
      transform: translateY(-0.875rem);
    }
  `}

  ${media.lessThan('md')`
    & + div {
      margin-top: 1rem;
    }
  `}

  ${media.lessThan('xs')`
    border-radius: 0.5rem;

    section {
      margin-top: 0;
    }
  `}
`;
