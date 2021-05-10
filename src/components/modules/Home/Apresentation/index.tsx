/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import { Button } from '~/components/shared/Button';

import { Container, Content, UserContainer, ButtonContainer } from './styles';

export function Apresentation() {
  return (
    <Container>
      <Content>
        <h1>
          <strong className="blue-color">{`{`}</strong>
          as_melhores_tecnologias
          <br />
          para_as_melhores_idéias
          <strong className="blue-color">{`}`}</strong>
        </h1>
        <span>
          Aplicações fullstack para web e mobile desde o
          <br /> layout até o código.
        </span>

        <UserContainer>
          <img src="/static/img/avatar.svg" alt="Avatar" />

          <div>
            <span>Gabriel Teodoro</span>
            <p>
              Product Developer at{' '}
              <Link href="https://brainn.co">
                <a target="_blank">Brainn Co</a>
              </Link>
            </p>
          </div>
        </UserContainer>

        <ButtonContainer>
          <Button>
            <span>Iniciar um projeto</span>
          </Button>
        </ButtonContainer>
      </Content>

      <img src="/static/img/developer-working.svg" alt="Developer Working" />
    </Container>
  );
}
