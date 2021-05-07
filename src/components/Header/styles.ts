import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 80px 90px;

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
`;
