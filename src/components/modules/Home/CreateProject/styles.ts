import styled, { css } from 'styled-components';

import { Container as InputRadioContainer } from '~/components/shared/InputRadio/styles';

interface SelectAmountItemProps {
  isSelected?: boolean;
}

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

  margin-left: -160px;

  max-width: 544px;
  width: 100%;

  form {
    display: grid;
    grid-gap: 23px;
  }
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

    margin-top: 20px;

    ${InputRadioContainer} {
      & + ${InputRadioContainer} {
        margin-left: 25px;
      }

      span {
        margin-left: 13px;
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
    margin-top: 18px;
  }
`;

export const SelectAmountItem = styled.li<SelectAmountItemProps>`
  background: transparent;

  border: 2px solid var(--blue-400);

  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  cursor: pointer;
  z-index: 1;

  &:hover {
    background: var(--blue-400);
  }

  & + li {
    margin-left: 14px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: var(--blue-400);
    `}
`;
