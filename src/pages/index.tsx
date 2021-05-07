import { SEO } from '~/components/shared/SEO';

import { Apresentation } from '~/components/modules/Home/Apresentation';

import { Services } from '~/components/modules/Home/Services';

import { Techs } from '~/components/modules/Home/Techs';

import { CreateProject } from '~/components/modules/Home/CreateProject';

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
