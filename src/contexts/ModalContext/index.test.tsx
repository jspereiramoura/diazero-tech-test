import { render, screen, fireEvent } from "@testing-library/react";
import { ModalProvider, ModalContext } from "./index";
import { useContext } from "react";

const TestComponent = () => {
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext)!;

  return (
    <div>
      <button onClick={() => handleOpenModal(<div>Test Content</div>)}>
        Open Modal
      </button>
      <button onClick={handleCloseModal}>Close Modal</button>
    </div>
  );
};

describe("Context: ModalContext", () => {
  it("should open and close the modal with the correct content", () => {
    render(
      <ModalProvider title="Test Modal">
        <TestComponent />
      </ModalProvider>
    );

    fireEvent.click(screen.getByText("Open Modal"));
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close Modal"));
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });
});
