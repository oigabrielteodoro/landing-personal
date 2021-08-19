import { SEO } from '~/components/shared/SEO';

import { Apresentation, Services, Techs, CreateProject } from '~/components';

import { Container } from '~/styles/pages/Home';

export default function Home() {
  return (
    <>
      <SEO title="Gabriel Teodoro" shouldExcludeTitleSuffix />

      <Container>
        <Apresentation />

        <Services />

        <Techs />

        <CreateProject />
      </Container>
    </>
  );
}
