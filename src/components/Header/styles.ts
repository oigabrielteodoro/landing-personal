import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;

  padding: 80px 0;

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
