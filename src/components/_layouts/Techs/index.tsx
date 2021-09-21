import { techs } from '~/content/techs';

import {
  Container,
  TechList,
  TechListItem,
  TechItemData,
  TechDataContainer,
  TechUsageItem,
  TechUsageList,
  TechInformation,
} from './styles';

export function Techs() {
  return (
    <Container>
      <h1>
        <strong className="blue-color">{`{`}</strong>
        tecnologias_mais_usadas
        <strong className="blue-color">{`}`}</strong>
      </h1>
      <span>Ordenado por relevância</span>

      <TechList>
        {techs.map(tech => (
          <TechListItem key={tech.id} colorToHover={tech.color}>
            {tech.img}

            <TechItemData>
              <span>{tech.name}</span>

              <TechDataContainer>
                <TechUsageList>
                  {[1, 2, 3].map(level => (
                    <TechUsageItem
                      key={String(Math.random())}
                      isUsage={tech.level >= level}
                    />
                  ))}
                </TechUsageList>

                <TechInformation data-content={tech.content}>
                  <img src="/static/img/icons/help.svg" alt="Help" />
                </TechInformation>
              </TechDataContainer>
            </TechItemData>
          </TechListItem>
        ))}
      </TechList>
    </Container>
  );
}
