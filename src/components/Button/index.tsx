import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children }: ButtonProps) {
  return <Container>{children}</Container>;
}
