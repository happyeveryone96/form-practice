import { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";
import { checkValidate } from "../utils/validate";

const TextField: FunctionComponent<InputProps> = ({
  source,
  label,
  placeholder,
  type,
  validate,
}) => {
  const {
    value,
    onChange,
    minNameValidate,
    maxNameValidate,
    minPasswordValidate,
    maxPasswordValidate,
  } = useInput({
    source,
    validate,
  });

  const isNameValidate = source === "name";
  const isPasswordValidate = source === "password";

  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={source}
          type={type}
          placeholder={placeholder}
        />
        <div>
          {isNameValidate && checkValidate(minNameValidate, value)}
          {isNameValidate && checkValidate(maxNameValidate, value)}
          {isPasswordValidate && checkValidate(minPasswordValidate, value)}
          {isPasswordValidate && checkValidate(maxPasswordValidate, value)}
        </div>
      </div>
    </div>
  );
};

export default TextField;
