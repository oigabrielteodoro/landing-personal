import styled from 'styled-components';

import { media } from '~/styles/media';

export const Container = styled.footer``;

export const TopContainer = styled.div`
  padding: 3.438rem 6.25rem;
  background: var(--black-100);

  nav {
    max-width: 78.125rem;
    margin: 0 auto;

    ul {
      display: flex;
      align-items: center;

      li {
        font-size: 1.125rem;
        font-weight: 500;
        color: var(--white);
        transition: filter 0.2s;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8);
        }

        & + li {
          margin-left: 3.125rem;
        }
      }
    }
  }

  ${media.lessThan('md')`
    display: none;
  `}
`;

export const BottomContainer = styled.div`
  padding: 4.063rem 0;
  color: var(--gray-400);
  font-size: 1.25rem;
  max-width: 78.125rem;
  margin: 0 auto;

  a {
    color: var(--pink-500);
  }

  ${media.lessThan('md')`
    padding: 2rem;
    max-width: 100vw;
    margin: 0;

    text-align: center;
    font-size: 0.875rem;
  `}
`;
