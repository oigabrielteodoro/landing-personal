import * as S from './Header.styled';

export function Header() {
  return (
    <S.Container>
      <img src="/static/img/logo.svg" alt="Gabriel Teodoro" />
      <nav>
        <ul>
          <li>Tecnologias</li>
          <li>Iniciar um projeto</li>
        </ul>
      </nav>
    </S.Container>
  );
}
