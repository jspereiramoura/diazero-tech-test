import { render, screen, fireEvent } from "@testing-library/react";
import { vi, Mock } from "vitest";
import Modal from "./index";
import { useModal } from "../../hooks/useModal";

vi.mock("../../hooks/useModal");

describe("Component: Modal", () => {
  it("should render the modal with the correct title and content", () => {
    (useModal as Mock).mockReturnValue({ handleCloseModal: vi.fn() });

    render(
      <Modal title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Test Modal" })
    ).toBeInTheDocument();

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should call handleCloseModal when the close button is clicked", () => {
    const handleCloseModal = vi.fn();
    (useModal as Mock).mockReturnValue({ handleCloseModal });

    render(
      <Modal title="Test Modal">
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });
});
