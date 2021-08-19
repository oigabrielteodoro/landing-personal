import styled, { css } from 'styled-components';

import { Container as InputRadioContainer } from '~/components/shared/InputRadio/styles';
import { media } from '~/styles/media';

interface SelectAmountItemProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  max-width: 68.75rem;
  margin: 8.625rem auto;

  display: flex;
  align-items: flex-start;

  ${media.lessThan('md')`
    flex-direction: column;
    align-items: center;

    margin: 2.875rem 0 0;
  `}
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
    margin-top: 1.25rem;
  }

  span {
    display: block;
    color: var(--gray-400);
    font-size: 1rem;
    margin-top: 1.25rem;
  }

  img {
    position: relative;
    width: 45.125rem;
    z-index: -1;
    left: -6.25rem;
    top: 7.25rem;
  }

  ${media.lessThan('md')`
    align-items: center;
    text-align: center;

    padding: 0 2.875rem;

    h2 {
      display: none;
    }

    span {
      margin-top: 1rem;
    }

    img {
      display: none;
    }
  `}
`;

export const FormContainer = styled.div`
  background: var(--black-400);
  padding: 3.688rem;
  border-radius: 0.625rem;
  margin-left: -10.125rem;
  width: 56.25rem;

  form {
    display: grid;
    grid-gap: 1.438rem;
    width: 100%;
  }

  ${media.lessThan('md')`
    margin-left: 0;
    margin-top: 3rem;
    border-radius: 0;
    padding: 2.875rem;
    max-width: 100vw;
  `}

  ${media.lessThan('xs')`
    padding: 2rem;
  `}
`;

export const YouHaveDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    color: var(--white);
    font-size: 1rem;
  }

  section {
    display: flex;
    align-items: center;
    margin-top: 1.25rem;

    ${InputRadioContainer} {
      & + ${InputRadioContainer} {
        margin-left: 1.563rem;
      }

      span {
        margin-left: 0.813rem;
      }
    }
  }
`;

export const SelectAmountPagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    color: var(--white);
    font-size: 1rem;
  }

  ul {
    display: flex;
    align-items: center;
    margin-top: 1.125rem;
  }
`;

export const SelectAmountItem = styled.li<SelectAmountItemProps>`
  background: transparent;
  border: 0.125rem solid var(--pink-500);
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: var(--pink-500);
  }

  & + li {
    margin-left: 0.875rem;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: var(--pink-500);
    `}

  @media screen and (max-width: 23.063rem) {
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }
`;
