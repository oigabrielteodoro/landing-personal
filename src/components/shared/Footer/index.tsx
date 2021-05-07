/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import { BottomContainer, Container, TopContainer } from './styles';

export function Footer() {
  return (
    <Container>
      <TopContainer>
        <nav>
          <ul>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Iniciar um novo projeto</li>
          </ul>
        </nav>
      </TopContainer>
      <BottomContainer>
        © 2019 - 2021{' '}
        <Link href="https://github.com/oigabrielteodoro">
          <a target="_blank">Gabriel Teodoro</a>
        </Link>
        . Todos os direitos reservados.
      </BottomContainer>
    </Container>
  );
}
