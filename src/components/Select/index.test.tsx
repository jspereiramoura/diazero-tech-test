import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./index";
import { vi } from "vitest";

describe("Select Component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  it("should renders correctly with given options", () => {
    render(<Select value="Option 1" options={options} onChange={() => {}} />);

    expect(screen.getByDisplayValue("Option 1")).toBeInTheDocument();

    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("should calls onChange when a different option is selected", () => {
    const onChange = vi.fn();

    render(<Select value="Option 1" options={options} onChange={onChange} />);
    fireEvent.change(screen.getByDisplayValue("Option 1"), {
      target: { value: "Option 2" }
    });
    expect(onChange).toHaveBeenCalledWith("Option 2");
  });
});
