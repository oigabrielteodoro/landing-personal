import styled from 'styled-components';
import { media } from '~/styles/media';

export const Container = styled.section`
  max-width: 68.75rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > img {
    margin-top: -1.875rem;
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
    margin-top: 6.563rem;
    font-size: 1.75rem;
  }

  > span {
    color: var(--gray-100);
    font-size: 1.25rem;
    margin-top: 1.25rem;
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
  margin-top: 1.25rem;

  img {
    width: 3.875rem;
    height: 3.875rem;
    border-radius: 50%;
    object-fit: cover;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  div {
    margin-left: 1rem;

    span {
      font-size: 1.25rem;
      color: var(--white);
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      margin-top: 0.25rem;

      a {
        color: var(--pink-500);
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
      width: 3.25rem;
      height: 3.25rem;
    }
  `}

  ${media.lessThan('xs')`
    img {
      width: 3rem;
      height: 3rem;
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
  max-width: 25rem;
  width: 100%;
  display: flex;
  margin-top: 1.25rem;
`;
