import { ComponentType, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputMaskProps extends InputProps {
  name: string;
  icon?: ComponentType<IconBaseProps>;
  maskChar?: any;
}

export function InputMask({ name, icon: Icon, defaultValue, ...rest }: InputMaskProps) {
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
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={25} />}

      <ReactInputMask
        autoComplete="off"
        defaultValue={defaultValue}
        onChange={event => handleInputChange(event.currentTarget.value)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
    </Container>
  );
}
