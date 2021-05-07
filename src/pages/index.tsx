import { SEO } from '~/components/SEO';

import { Apresentation } from '~/components/Apresentation';

import { Services } from '~/components/Services';

import { Techs } from '~/components/Techs';

import { Container } from '~/styles/pages/Home';

export default function Home() {
  return (
    <>
      <SEO title="Gabriel Teodoro" shouldExcludeTitleSuffix />

      <Container>
        <Apresentation />

        <Services />

        <Techs />
      </Container>
    </>
  );
}
