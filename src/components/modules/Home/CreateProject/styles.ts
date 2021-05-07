import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 138px auto;

  display: flex;
  align-items: flex-start;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 20px;
  }

  span {
    display: block;
    color: var(--gray-400);
    font-size: 1rem;
    margin-top: 20px;
  }

  img {
    position: relative;
    width: 722px;
    z-index: -1;
    left: -100px;
    top: 116px;
  }
`;

export const FormContainer = styled.div`
  background: var(--black-400);

  padding: 59px;
  border-radius: 10px;
`;
