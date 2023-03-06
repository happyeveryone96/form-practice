import { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const CheckboxField: FunctionComponent<InputProps> = ({
  source,
  label,
  validate,
}) => {
  const { value, onChange } = useInput({
    source,
    validate,
  });

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <label htmlFor={source}>{label}</label>
      <input
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        name={source}
        type="checkbox"
      />
    </div>
  );
};

export default CheckboxField;
