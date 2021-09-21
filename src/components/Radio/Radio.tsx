import { MouseEvent } from 'react';

import * as S from './Radio.styled';

type Props = {
  isSelected: boolean;
  placeholder: string;
  onChangeValue: () => void;
};

export function Radio({ isSelected, placeholder, onChangeValue }: Props) {
  function handleUpdate(event: MouseEvent) {
    event.preventDefault();
    onChangeValue();
  }

  return (
    <S.Container>
      <S.Circle isSelected={isSelected} onClick={handleUpdate} />

      <span>{placeholder}</span>
    </S.Container>
  );
}
