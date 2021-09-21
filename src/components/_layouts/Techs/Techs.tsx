import { techs } from '~/content/techs';

import * as S from './Techs.styled';

export function Techs() {
  return (
    <S.Container>
      <h1>
        <strong className="blue-color">{`{`}</strong>
        tecnologias_mais_usadas
        <strong className="blue-color">{`}`}</strong>
      </h1>
      <span>Ordenado por relevância</span>

      <S.TechList>
        {techs.map(tech => (
          <S.TechListItem key={tech.id} colorToHover={tech.color}>
            {tech.img}

            <S.TechItemData>
              <span>{tech.name}</span>

              <S.TechDataContainer>
                <S.TechUsageList>
                  {[1, 2, 3].map(level => (
                    <S.TechUsageItem
                      key={String(Math.random())}
                      isUsage={tech.level >= level}
                    />
                  ))}
                </S.TechUsageList>

                <S.TechInformation data-content={tech.content}>
                  <img src="/static/img/icons/help.svg" alt="Help" />
                </S.TechInformation>
              </S.TechDataContainer>
            </S.TechItemData>
          </S.TechListItem>
        ))}
      </S.TechList>
    </S.Container>
  );
}
