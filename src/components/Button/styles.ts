import styled from 'styled-components';

export const Container = styled.button`
  position: relative;

  background: transparent;

  border: 2px solid var(--blue-400);

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--blue-400);
  font-size: 16px;
  font-weight: 600;

  padding: 20px 0;

  flex: 1;

  transition: all 0.5s;

  &::before {
    content: '';
    position: absolute;
    background: var(--blue-400);
    height: 100%;
    width: 0;

    left: 0;
    right: 0;

    transition: all 0.5s;
    z-index: -1;
  }

  &:hover {
    color: var(--white);

    &::before {
      width: 100%;
    }
  }
`;
