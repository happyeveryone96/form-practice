import {InputProps} from "../types/InputProps";
import {useCallback, useContext} from "react";
import {FormContext} from "../components/SimpleForm";

interface UseInputProps
  extends Pick<InputProps, "source" | "validate"> {}

function useInput(props: UseInputProps) {
  const { validate } = props;
  const { setValues, values, setErrors, errors } = useContext(FormContext);

  const onChange = useCallback(
    (v: any) => {
      const errs = validate?.map((validateFunc) => {
        const error = validateFunc(v);
        return error;
      });

      const err = errs?.find((e) => e !== undefined);

      if (err === undefined) {
        delete errors[props.source];
      } else {
        setErrors({
          ...errors,
          [props.source]: err,
        });
      }

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
    errors,
  };
}

export default useInput;
