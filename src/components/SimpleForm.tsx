import { createContext, PropsWithChildren, useMemo, useState } from "react";
import { isEmpty, isError } from "../utils/validate";

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

  const onClick = (e: any) => {
    e.preventDefault();
    if (isError(errors) || isEmpty(values)) {
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
