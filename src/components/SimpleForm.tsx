import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  errors: {} as Record<string, any>,
  setErrors: (error: any) => {},
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({
    name: undefined,
    password: undefined,
  });
  const value = useMemo(
    () => ({ setValues, values, errors, setErrors }),
    [setValues, values, errors, setErrors]
  );

  const isError = errors.name !== undefined || errors.password !== undefined;
  const isEmpty = values.name === "" && values.password === "";

  const onClick = (e: any) => {
    e.preventDefault();
    if (isError || isEmpty) {
      alert("제출에 실패하였습니다. 회원 정보를 확인해주세요.");
    } else {
      alert(JSON.stringify(values));
    }
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
