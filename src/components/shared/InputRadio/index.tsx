import { MouseEvent } from 'react';

import { Container, Circle } from './styles';

interface InputRadioProps {
  isSelected: boolean;
  placeholder: string;
  onChangeValue: () => void;
}

export function InputRadio({ isSelected, placeholder, onChangeValue }: InputRadioProps) {
  function handleUpdate(event: MouseEvent) {
    event.preventDefault();
    onChangeValue();
  }

  return (
    <Container>
      <Circle isSelected={isSelected} onClick={handleUpdate} />

      <span>{placeholder}</span>
    </Container>
  );
}
