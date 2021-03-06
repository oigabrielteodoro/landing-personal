import { useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { FiMail, FiMessageSquare, FiPlus, FiSmartphone, FiUser } from 'react-icons/fi';

import { Input, Button, TextArea, InputMask, Radio } from '~/components';

import * as S from './CreateProject.styled';

export function CreateProject() {
  const { handleSubmit, ...form } = useForm();

  const [hasDesign, setHasDesign] = useState(false);
  const [pageSelected, setPageSelected] = useState<string>();

  return (
    <S.Container>
      <S.Content>
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
      </S.Content>
      <S.FormContainer>
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

            <S.YouHaveDesignContainer>
              <span>Você já possui o design?</span>

              <section>
                <Radio
                  isSelected={hasDesign}
                  placeholder="Sim"
                  onChangeValue={() => setHasDesign(true)}
                />
                <Radio
                  isSelected={!hasDesign}
                  placeholder="Não"
                  onChangeValue={() => setHasDesign(false)}
                />
              </section>
            </S.YouHaveDesignContainer>

            <S.SelectAmountPagesContainer>
              <span>Número de páginas do projeto</span>

              <ul>
                {[1, 2, 3, 4, 5, 6, 7].map(pageItem => (
                  <S.SelectAmountItem
                    key={String(Math.random())}
                    isSelected={pageItem.toString() === pageSelected}
                    onClick={() => setPageSelected(pageItem.toString())}
                  >
                    {pageItem}
                  </S.SelectAmountItem>
                ))}
                <S.SelectAmountItem
                  key={String(Math.random())}
                  isSelected={pageSelected === '+'}
                  onClick={() => setPageSelected('+')}
                >
                  <FiPlus size={18} />
                </S.SelectAmountItem>
              </ul>
            </S.SelectAmountPagesContainer>

            <TextArea name="message" icon={FiMessageSquare} placeholder="Mensagem" />

            <Button type="button">
              <span>Enviar mensagem</span>
            </Button>
          </form>
        </FormProvider>
      </S.FormContainer>
    </S.Container>
  );
}
