import styled from 'styled-components';
import { media } from '~/styles/media';

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > img {
    margin-top: -30px;
  }

  ${media.lessThan('sm')`
    flex-direction: column;
    padding: 0 2.875rem;

    max-width: 100vw;

    > img {
      display: none;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 105px;
    font-size: 1.75rem;
  }

  > span {
    color: var(--gray-100);
    font-size: 1.25rem;
    margin-top: 20px;
  }

  ${media.lessThan('sm')`
    flex: 1;

    h1 {
      margin-top: 0;
    }

    span br {
      display: none;
    }
  `}
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  img {
    width: 62px;
    height: 62px;

    border-radius: 50%;
    object-fit: cover;

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  div {
    margin-left: 16px;

    span {
      font-size: 1.25rem;
      color: var(--white);
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      margin-top: 4px;

      a {
        color: var(--blue-400);
        font-weight: 500;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  ${media.lessThan('sm')`
    img {
      width: 52px;
      height: 52px;
    }
  `}
`;

export const ButtonContainer = styled.div`
  max-width: 400px;
  width: 100%;

  display: flex;

  margin-top: 20px;
`;
