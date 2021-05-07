import { Apresentation } from '~/components/Apresentation';

import { Container } from '~/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <img src="/static/img/apresentation-background.svg" alt="Background" />

      <Apresentation />
    </Container>
  );
}
