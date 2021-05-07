import styled, { css } from 'styled-components';

interface TechListItemProps {
  colorToHover: string;
}

interface TechUsageItemProps {
  isUsage: boolean;
}

export const Container = styled.div`
  background: var(--black-100);

  padding: 80px 0;

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
`;

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;

  max-width: 1100px;
  margin: 80px auto 0;
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
`;

export const TechItemData = styled.div`
  display: flex;
  align-items: center;

  flex: 1;

  margin-left: 14px;

  span {
    font-weight: 500;
    font-size: 18px;
    color: var(--white);
  }
`;

export const TechUsageList = styled.ul`
  display: flex;
  align-items: center;

  margin-left: auto;
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
