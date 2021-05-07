import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src="/static/img/logo.svg" alt="Gabriel Teodoro" />
      <nav>
        <ul>
          <li>Tecnologias</li>
          <li>Iniciar um projeto</li>
        </ul>
      </nav>
    </Container>
  );
}
