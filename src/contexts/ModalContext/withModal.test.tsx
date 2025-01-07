import { fireEvent, render, screen } from "@testing-library/react";
import withModal from "./withModal";
import { useModal } from "../../hooks/useModal";

const TestComponent = () => {
  const { handleOpenModal } = useModal();

  return (
    <button onClick={() => handleOpenModal(<div>Test Modal Content</div>)}>
      Open Modal
    </button>
  );
};

const WrappedComponent = withModal(TestComponent, "Test Modal Title");

describe("HOC: withModal", () => {
  it("should open the modal when the wrapped component triggers openModal", () => {
    render(<WrappedComponent />);

    fireEvent.click(screen.getByText("Open Modal"));

    expect(screen.getByText("Test Modal Title")).toBeInTheDocument();
    expect(screen.getByText("Test Modal Content")).toBeInTheDocument();
  });
});
