import styled from 'styled-components';
import { media } from '~/styles/media';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1100px;
  margin: 0 auto;

  padding: 5.75rem 0;

  nav ul {
    display: flex;
    align-items: center;

    li {
      font-size: 1rem;
      font-weight: 500;
      font-family: 'Rubik';

      transition: filter 0.2s;

      cursor: pointer;

      & + li {
        margin-left: 40px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  ${media.lessThan('md')`
    padding: 3rem;

    nav {
      margin-left: auto;
    }
  `}

  ${media.lessThan('sm')`
    padding: 3.5rem 2.875rem;

    nav {
      display: none;
    }
  `}

  ${media.lessThan('xs')`
    padding: 3rem 2rem;
  `}
`;
