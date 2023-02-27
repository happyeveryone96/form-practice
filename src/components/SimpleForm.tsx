import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  errors: {} as Record<string, any>,
  setErrors: (error: any) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({name: undefined, password: ""});
  const [errors, setErrors] = useState({});
  const value = useMemo(() => ({setValues, values, errors, setErrors}), [setValues, values, errors, setErrors]);

  // errors = {
  //   name: "5글자 이상 입력해주세요."
  // password: undefined
// }

  const onClick = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
        <button type={"submit"} onClick={onClick}>
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
