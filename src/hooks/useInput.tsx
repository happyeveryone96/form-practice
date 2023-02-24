import { InputProps } from "../types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values } = useContext(FormContext);
  const { name, password } = values;
  const [minValidate, maxValidate] = props.validate;
  const minNameValidate = minValidate(name);
  const maxNameValidate = maxValidate(name);
  const minPasswordValidate = minValidate(password);
  const maxPasswordValidate = maxValidate(password);

  const onChange = useCallback(
    (v: string | number) => {
      setValues({
        ...values,
        [props.source]: v,
      });
    },

    [values, props.source]
  );

  return {
    value: values[props.source],
    onChange,
    minNameValidate,
    maxNameValidate,
    minPasswordValidate,
    maxPasswordValidate,
  };
}

export default useInput;
