/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import SelectboxField from "../src/components/SelectboxField";

describe("SelectboxField", () => {
  it("renders SelectboxField component", () => {
    render(
      <SelectboxField
        source="color"
        label="색깔"
        options={[
          { key: 1, value: "orange" },
          { key: 2, value: "red" },
        ]}
      />
    );

    expect(screen.getByText("색깔")).toBeInTheDocument();
  });
});
