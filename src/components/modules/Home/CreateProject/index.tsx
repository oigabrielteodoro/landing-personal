import { FormProvider, useForm } from 'react-hook-form';
import { FiMail, FiSmartphone, FiUser } from 'react-icons/fi';

import { Input } from '~/components/shared/Input';
import { Button } from '~/components/shared/Button';

import { Container, Content, FormContainer } from './styles';

export function CreateProject() {
  const { handleSubmit, ...form } = useForm();

  return (
    <Container>
      <Content>
        <h1>
          const <strong className="blue-color">project</strong> = new <strong className="gray-color">Project</strong>();
        </h1>
        <h2>
          Vamos tirar sua idéia do <br /> papel!
        </h2>
        <span>
          Conte-me um pouco da sua idéia! <br />
          Lhe retornarei em breve.
        </span>

        <img src="/static/img/create-project-peoples.svg" alt="Create Project Peoples" />
      </Content>
      <FormContainer>
        <FormProvider handleSubmit={handleSubmit} {...form}>
          <form>
            <Input name="name" icon={FiUser} placeholder="Nome completo" />
            <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="cellphone" icon={FiSmartphone} placeholder="Telefone" />

            <Button type="button">
              <span>Enviar mensagem</span>
            </Button>
          </form>
        </FormProvider>
      </FormContainer>
    </Container>
  );
}
