import { InputProps } from "../types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../components/SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { setValues, values } = useContext(FormContext);
  const { name, password } = values;

  const onChange = useCallback(
    (v: string | number) => {
      props.validate.forEach(validateFunc => {
        const error = validateFunc(v);
        if (error) {
          setError()
        }
      });

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
  };
}

export default useInput;
