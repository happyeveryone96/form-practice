/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import CheckboxField from "../src/components/CheckboxField";

describe("CheckboxField", () => {
  it("renders CheckboxField component", () => {
    render(
      <CheckboxField
        source="marketingReception"
        label="마케팅 수신"
        type="checkbox"
      />
    );

    expect(screen.getByText("마케팅 수신")).toBeInTheDocument();
  });
});
