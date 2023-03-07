import CheckboxField from "../components/CheckboxField";
import SelectboxField from "../components/SelectboxField";
import SimpleForm from "../components/SimpleForm";
import TextField from "../components/TextField";
import { min, max } from "../utils/validate";

function UserInfoForm(): JSX.Element {
  return (
    <SimpleForm>
      <TextField source={"name"} label={"이름"} validate={[min(5), max(10)]} />
      <TextField
        type="password"
        source="password"
        label={"비밀번호"}
        validate={[min(5), max(10)]}
      />
      <CheckboxField
        source="termsOfService"
        label="서비스 이용약관"
        type="checkbox"
      />
      <CheckboxField
        source="marketingReception"
        label="마케팅 수신"
        type="checkbox"
      />
      <SelectboxField
        source="color"
        label="색깔"
        options={[
          { key: 1, value: "orange" },
          { key: 2, value: "red" },
        ]}
      />
    </SimpleForm>
  );
}

export default UserInfoForm;
