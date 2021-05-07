import styled from 'styled-components';

export const Container = styled.footer``;

export const TopContainer = styled.div`
  padding: 55px 100px;
  background: var(--black-100);

  nav ul {
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
`;

export const BottomContainer = styled.div`
  background: var(--black-800);
  padding: 65px 100px;

  color: var(--gray-400);
  font-size: 18px;

  a {
    color: var(--blue-400);
  }
`;
