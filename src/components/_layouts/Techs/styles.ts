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
    margin-top: 0.714rem;
  }

  ${media.lessThan('sm')`
    padding: 2.875rem;

    h1 {
      font-size: 1.25rem;
    }

    > span {
      margin-top: 0.357rem;
      font-size: 1rem;
    }
  `}

  ${media.lessThan('xs')`
    padding: 2rem;
  `}
`;

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5rem;
  max-width: 68.75rem;
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

  ${media.between('md', 'lg')`
    padding: 0 3rem;
  `}
`;

export const TechListItem = styled.li<TechListItemProps>`
  display: flex;
  align-items: center;
  background: var(--black-400);
  border-radius: 0.5rem;
  padding-right: 0.875rem;
  border: 0.125rem solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ colorToHover }) => colorToHover};
  }

  img {
    width: 4.438rem;
    height: 4.438rem;
    border-radius: 0.313rem 0 0 0.313rem;
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
  margin-left: 0.875rem;

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

  @media screen and (max-width: 24.938rem) {
    display: none;
  }
`;

export const TechUsageItem = styled.li<TechUsageItemProps>`
  height: 0.25rem;
  width: 1.063rem;
  border-radius: 0.063rem;
  background: var(--pink-500);

  & + li {
    margin-left: 0.313rem;
  }

  ${({ isUsage }) =>
    !isUsage &&
    css`
      background: #2b2c28;
    `}
`;

export const TechInformation = styled.div`
  height: 1.875rem;
  width: 1.875rem;
  background: var(--black-100);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: 50%;
  margin-left: 0.875rem;

  img {
    width: 0.813rem;
    height: 0.813rem;
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
    top: 2.5rem;
    min-width: 18.75rem;

    ${media.lessThan('sm')`
      right: -2.5rem;
    `}
  }

  &::after {
    content: '';
    position: absolute;
    top: 2rem;
    border-style: solid;
    border-width: 0 0.5rem 0.5rem 0.5rem;
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
