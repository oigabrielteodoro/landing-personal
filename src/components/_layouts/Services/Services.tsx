import { FiArrowRight } from 'react-icons/fi';

import * as S from './Services.styled';

export function Services() {
  return (
    <S.Container>
      <S.Content>
        <S.ServiceCard>
          <img src="/static/img/icons/sites.svg" alt="Sites" />

          <section>
            <strong>Sites</strong>
            <span>
              Desenvolvimento de sites e landing pages para a divulgação da sua idéia!
            </span>

            <button type="button">
              Ver projetos <FiArrowRight size={15} />
            </button>
          </section>
        </S.ServiceCard>
        <S.ServiceCard>
          <img src="/static/img/icons/softwares.svg" alt="Softwares" />

          <section>
            <strong>Softwares</strong>
            <span>
              Desenvolvimento de softwares para ajudar a realizar as tarefas da sua idéia!
            </span>

            <button type="button">
              Ver projetos <FiArrowRight size={15} />
            </button>
          </section>
        </S.ServiceCard>
        <S.ServiceCard>
          <img src="/static/img/icons/applications.svg" alt="Applications" />

          <section>
            <strong>Aplicativos</strong>
            <span>
              Desenvolvimento de aplicativos híbridos para a sua idéia atingir mais
              usuários!
            </span>

            <button type="button">
              Ver projetos <FiArrowRight size={15} />
            </button>
          </section>
        </S.ServiceCard>
      </S.Content>
    </S.Container>
  );
}
