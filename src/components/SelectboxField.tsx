import { FunctionComponent } from "react";
import { InputProps } from "../types/InputProps";
import useInput from "../hooks/useInput";

const SelectboxField: FunctionComponent<InputProps> = ({
  source,
  label,
  validate,
  options,
}) => {
  const { onChange } = useInput({
    source,
    validate,
  });

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <label htmlFor={source}>{label}</label>
      <select onChange={(e) => onChange(e.target.value)}>
        {options?.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectboxField;
