import { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({
  source,
  label,
  placeholder,
  type,
  validate,
}) => {
  const { value, onChange, errors } = useInput({
    source,
    validate,
  });

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <label htmlFor={source}>{label}</label>
      <input
        id={source}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={source}
        type={type}
        placeholder={placeholder}
        aria-label={source}
      />
      <div>{errors[source]}</div>
    </div>
  );
};

export default TextField;
