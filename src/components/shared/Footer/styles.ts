import styled from 'styled-components';

import { media } from '~/styles/media';

export const Container = styled.footer`
  ${media.lessThan('sm')`
    display: none;
  `}
`;

export const TopContainer = styled.div`
  padding: 55px 100px;
  background: var(--black-100);

  nav {
    max-width: 1250px;
    margin: 0 auto;

    ul {
      display: flex;
      align-items: center;

      li {
        font-size: 18px;
        font-weight: 500;
        color: var(--white);

        transition: filter 0.2s;
        cursor: pointer;

        &:hover {
          filter: brightness(0.8);
        }

        & + li {
          margin-left: 50px;
        }
      }
    }
  }
`;

export const BottomContainer = styled.div`
  padding: 65px 0;

  color: var(--gray-400);
  font-size: 18px;

  max-width: 1250px;
  margin: 0 auto;

  a {
    color: var(--blue-400);
  }
`;
