import { InputProps } from "../types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values } = useContext(FormContext);
  const minNameValidate = props.validate[0](values.name);
  const maxNameValidate = props.validate[1](values.name);
  const minPasswordValidate = props.validate[0](values.password);
  const maxPasswordValidate = props.validate[1](values.password);

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
