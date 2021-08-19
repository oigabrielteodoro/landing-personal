import { ComponentType, useEffect, useState, TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

export function TextArea({
  name,
  icon: Icon,
  placeholder,
  defaultValue,
  ...rest
}: TextAreaProps) {
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

  function handleTextAreaFocus() {
    const fieldValue = watch(name);

    setIsFocused(true);
    setIsFilled(!!fieldValue);
  }

  function handleTextAreaBlur() {
    const fieldValue = watch(name);

    setIsFocused(false);
    setIsFilled(!!fieldValue);
  }

  function handleTextAreaChange(value: string) {
    setValue(name, value);
  }

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <section>
        {Icon && <Icon size={25} />}

        <span>{placeholder}</span>
      </section>

      <hr />

      <textarea
        autoComplete="off"
        defaultValue={defaultValue}
        onChange={event => handleTextAreaChange(event.currentTarget.value)}
        onBlur={handleTextAreaBlur}
        onFocus={handleTextAreaFocus}
        placeholder="Informações adicionais"
        maxLength={300}
        {...rest}
      />
    </Container>
  );
}
