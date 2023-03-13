/**
 * @jest-environment jsdom
 */
import { render, fireEvent, screen } from "@testing-library/react";
import SimpleForm from "../src/components/SimpleForm";
import TextField from "../src/components/TextField";
import { max, min } from "../src/utils/validate";

describe("TextField", () => {
  const { queryByText, getByLabelText } = render(
    <SimpleForm>
      <TextField source={"name"} label={"이름"} validate={[min(5), max(10)]} />
    </SimpleForm>
  );
  const name = getByLabelText("이름");

  it("validates the input length using the min validators", () => {
    fireEvent.change(name, { target: { value: "x".repeat(4) } });
    expect(queryByText(/자 이상 입력해주세요./));
  });

  it("validates the input length using the max validators", () => {
    fireEvent.change(name, { target: { value: "x".repeat(11) } });
    expect(queryByText(/자 이하로 입력해주세요./));
  });

  it("renders TextField component", () => {
    render(
      <TextField source={"name"} label={"이름"} validate={[min(5), max(10)]} />
    );

    expect(screen.getByText("이름")).toBeInTheDocument();
  });
});
