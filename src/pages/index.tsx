import { Apresentation, Services, Techs, CreateProject, SEO } from '~/components';

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
