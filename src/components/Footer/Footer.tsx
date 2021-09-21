/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import * as S from './Footer.styled';

export function Footer() {
  return (
    <S.Container>
      <S.TopContainer>
        <nav>
          <ul>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Iniciar um novo projeto</li>
          </ul>
        </nav>
      </S.TopContainer>
      <S.BottomContainer>
        © 2019 - 2021{' '}
        <Link href="https://github.com/oigabrielteodoro">
          <a target="_blank">Gabriel Teodoro</a>
        </Link>
        . Todos os direitos reservados.
      </S.BottomContainer>
    </S.Container>
  );
}
