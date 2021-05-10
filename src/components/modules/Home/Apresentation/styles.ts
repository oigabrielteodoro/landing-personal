import styled from 'styled-components';
import { media } from '~/styles/media';

export const Container = styled.section`
  max-width: 1100px;
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > img {
    margin-top: -30px;
  }

  ${media.lessThan('md')`
    flex-direction: column;
    padding: 0 2.875rem;

    max-width: 100vw;
    margin: 0;

    > img {
      display: none;
    }
  `}

  ${media.lessThan('xs')`
    padding: 0 2rem;
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

  ${media.lessThan('md')`
    align-items: center;
    width: 100%;

    h1 {
      margin-top: 0;
      font-size: 1.5rem;
    }

    > span {
      text-align: center;

      br {
        display: none;
      }
    }
  `}

  ${media.lessThan('xs')`
    h1 {
      font-size: 1.3rem;
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

  ${media.lessThan('xs')`
    img {
      width: 48px;
      height: 48px;
    }

    div p {
      font-size: 0.875rem;
    }

    div span {
      font-size: 1rem;
    }
  `}
`;

export const ButtonContainer = styled.div`
  max-width: 400px;
  width: 100%;

  display: flex;

  margin-top: 20px;
`;
