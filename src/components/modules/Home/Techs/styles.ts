import styled, { css } from 'styled-components';

import { media } from '~/styles/media';

interface TechListItemProps {
  colorToHover: string;
}

interface TechUsageItemProps {
  isUsage: boolean;
}

export const Container = styled.div`
  background: var(--black-100);

  padding: 5rem 0;

  h1 {
    font-size: 1.75rem;
    text-align: center;
  }

  > span {
    display: block;

    color: var(--gray-400);
    font-size: 1.25rem;
    text-align: center;

    margin-top: 10px;
  }

  ${media.lessThan('sm')`
    padding: 2.875rem;

    h1 {
      font-size: 1.5rem;
    }

    > span {
      font-size: 1rem;
    }
  `}

  ${media.lessThan('xs')`
    padding: 2rem;

    h1 {
      font-size: 1.25rem;
    }

    > span {
      margin-top: 5px;
    }
  `}
`;

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;

  max-width: 1100px;
  margin: 5rem auto 0;

  ${media.lessThan('md')`
    display: flex;
    flex-direction: column;
    grid-gap: 0;
    margin: 2rem auto 0;
  `}

  ${media.greaterThan('sm')`
    margin: 5rem auto 0;
  `}

  ${media.greaterThan('md')`
    padding: 0 3rem;
  `}
`;

export const TechListItem = styled.li<TechListItemProps>`
  display: flex;
  align-items: center;

  background: var(--black-400);
  border-radius: 8px;

  padding-right: 14px;

  border: 2px solid transparent;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ colorToHover }) => colorToHover};
  }

  img {
    width: 71px;
    height: 71px;
    border-radius: 5px 0 0 5px;
  }

  ${media.lessThan('md')`
    & + li {
      margin-top: 1rem;
    }
  `}
`;

export const TechItemData = styled.div`
  display: flex;
  align-items: center;

  flex: 1;

  margin-left: 14px;

  span {
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--white);
  }

  ${media.lessThan('sm')`
    span {
      font-size: 1.1rem;
    }
  `}
`;

export const TechDataContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
`;

export const TechUsageList = styled.ul`
  display: flex;
  align-items: center;

  margin-left: auto;

  @media screen and (max-width: 350px) {
    display: none;
  }
`;

export const TechUsageItem = styled.li<TechUsageItemProps>`
  height: 4px;
  width: 17px;

  border-radius: 1px;
  background: var(--blue-400);

  & + li {
    margin-left: 5px;
  }

  ${({ isUsage }) =>
    !isUsage &&
    css`
      background: #2b2c28;
    `}
`;

export const TechInformation = styled.div`
  height: 30px;
  width: 30px;
  background: var(--black-100);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);

  border-radius: 50%;

  margin-left: 14px;

  img {
    width: 13px;
    height: 13px;
  }

  &::before {
    content: attr(data-content);
    position: absolute;
    background: #2c2d2e;
    padding: 1rem;
    border-radius: 0.25rem;
    color: var(--white);
    text-align: center;

    transition: all 0.4s;

    opacity: 0;
    visibility: hidden;

    z-index: 1;

    top: 40px;

    min-width: 300px;

    ${media.lessThan('sm')`
      right: -40px;
    `}
  }

  &::after {
    content: '';
    position: absolute;
    top: 32px;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #2c2d2e transparent;

    transition: all 0.4s;

    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
      visibility: visible;
    }
  }
`;
