import Link from 'next/link';

import { Button } from '../Button';

import { Container, UserContainer, ButtonContainer } from './styles';

export function Apresentation() {
  return (
    <Container>
      <h1>
        <strong className="blue-color">{`{`}</strong>
        as_melhores_tecnologias
        <br />
        para_as_melhores_idéias
        <strong className="blue-color">{`}`}</strong>
      </h1>
      <span>
        Aplicações fullstack para web e mobile desde o
        <br />
        layout até o código.
      </span>

      <UserContainer>
        <img src="/static/img/avatar.svg" alt="Avatar" />

        <div>
          <span>Gabriel Teodoro</span>
          <p>
            Product Developer at <Link href="https://brainn.co">Brainn Co</Link>
          </p>
        </div>
      </UserContainer>

      <ButtonContainer>
        <Button>Iniciar um projeto</Button>
      </ButtonContainer>
    </Container>
  );
}
