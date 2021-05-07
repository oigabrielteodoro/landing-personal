import { Apresentation } from '~/components/Apresentation';
import { Services } from '~/components/Services';

import { Container } from '~/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Apresentation />

      <Services />
    </Container>
  );
}
