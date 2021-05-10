import { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { FiMail, FiMessageSquare, FiPlus, FiSmartphone, FiUser } from 'react-icons/fi';

import { Input } from '~/components/shared/Input';
import { Button } from '~/components/shared/Button';
import { TextArea } from '~/components/shared/TextArea';
import { InputMask } from '~/components/shared/InputMask';
import { InputRadio } from '~/components/shared/InputRadio';

import {
  Container,
  Content,
  FormContainer,
  YouHaveDesignContainer,
  SelectAmountPagesContainer,
  SelectAmountItem,
} from './styles';

export function CreateProject() {
  const { handleSubmit, ...form } = useForm();

  const [hasDesign, setHasDesign] = useState(false);
  const [pageSelected, setPageSelected] = useState<string>();

  return (
    <Container>
      <Content>
        <h1>
          const <strong className="blue-color">project</strong> = new{' '}
          <strong className="gray-color">Project</strong>();
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

            <InputMask
              mask="(99) 99999-9999"
              maskChar={null}
              alwaysShowMask={false}
              name="cellphone"
              icon={FiSmartphone}
              placeholder="Telefone"
            />

            <YouHaveDesignContainer>
              <span>Você já possui o design?</span>

              <section>
                <InputRadio
                  isSelected={hasDesign}
                  placeholder="Sim"
                  onChangeValue={() => setHasDesign(true)}
                />
                <InputRadio
                  isSelected={!hasDesign}
                  placeholder="Não"
                  onChangeValue={() => setHasDesign(false)}
                />
              </section>
            </YouHaveDesignContainer>

            <SelectAmountPagesContainer>
              <span>Número de páginas do projeto</span>

              <ul>
                {[1, 2, 3, 4, 5].map(pageItem => (
                  <SelectAmountItem
                    key={String(Math.random())}
                    isSelected={pageItem.toString() === pageSelected}
                    onClick={() => setPageSelected(pageItem.toString())}
                  >
                    {pageItem}
                  </SelectAmountItem>
                ))}
                <SelectAmountItem
                  key={String(Math.random())}
                  isSelected={pageSelected === '+'}
                  onClick={() => setPageSelected('+')}
                >
                  <FiPlus size={18} />
                </SelectAmountItem>
              </ul>
            </SelectAmountPagesContainer>

            <TextArea name="message" icon={FiMessageSquare} placeholder="Mensagem" />

            <Button type="button">
              <span>Enviar mensagem</span>
            </Button>
          </form>
        </FormProvider>
      </FormContainer>
    </Container>
  );
}
