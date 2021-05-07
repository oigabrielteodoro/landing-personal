import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  position: relative;

  > img {
    position: absolute;
    z-index: -1;

    top: -300px;
    right: -500px;
  }
`;
