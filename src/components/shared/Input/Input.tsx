import { InputHTMLAttributes, ComponentType, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { IconBaseProps } from 'react-icons';

import * as S from './Input.styled';

type InputProps = {
  name: string;
  icon?: ComponentType<IconBaseProps>;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, icon: Icon, defaultValue, ...rest }: InputProps) {
  const { register, unregister, watch, setValue } = useFormContext();

  const [isFilled, setIsFilled] = useState(!!defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    register(name);

    if (defaultValue) setValue(name, defaultValue);

    return () => {
      unregister(name);
    };
  }, [name, defaultValue, register, unregister, setValue]);

  function handleInputFocus() {
    const fieldValue = watch(name);

    setIsFocused(true);
    setIsFilled(!!fieldValue);
  }

  function handleInputBlur() {
    const fieldValue = watch(name);

    setIsFocused(false);
    setIsFilled(!!fieldValue);
  }

  function handleInputChange(value: string) {
    setValue(name, value);
  }

  return (
    <S.Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={25} />}

      <input
        autoComplete="off"
        defaultValue={defaultValue}
        onChange={event => handleInputChange(event.currentTarget.value)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
    </S.Container>
  );
}
