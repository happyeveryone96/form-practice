import { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const CheckboxField: FunctionComponent<InputProps> = ({
  source,
  label,
  validate,
  type,
}) => {
  const { value, onChange } = useInput({
    source,
    validate,
    type,
  });

  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          checked={value}
          onChange={(e) => onChange(e.target.value)}
          name={source}
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default CheckboxField;
