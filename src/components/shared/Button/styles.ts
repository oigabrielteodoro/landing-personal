import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  background: transparent;

  border: 2px solid var(--blue-400);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.25rem 0;

  flex: 1;

  transition: all 0.5s;

  span {
    z-index: 1;
    font-size: 1rem;
    font-weight: 600;
    color: var(--blue-400);
    transition: all 0.5s;
  }

  &::before {
    content: '';
    position: absolute;
    background: var(--blue-400);
    height: 100%;
    width: 0;

    left: 0;
    right: 0;

    transition: all 0.5s;
  }

  &:hover {
    span {
      color: var(--white);
    }

    &::before {
      width: 100%;
    }
  }
`;
