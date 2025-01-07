import { Provider } from "react-redux";
import { vi } from "vitest";
import setupStore from "../../../../data/store";
import TicketsTableModal from "./TicketsTableModal";
import { fireEvent, render, screen } from "@testing-library/react";
import { ticketsMock } from "../../../../mocks/ticketListMock";
import { ModalProvider } from "../../../../contexts/ModalContext";
import * as ticketSlice from "../../../../data/slices/ticketSlice";
import { TicketStatus } from "../../../../types/Ticket";

vi.mock("../../../../data/slices/ticketSlice", async () => {
  const originalModule = await vi.importActual(
    "../../../../data/slices/ticketSlice"
  );
  return {
    ...originalModule,
    updateTicket: vi.fn(payload => ({
      type: "updateTicket",
      payload
    })),
    updateTicketStatus: vi.fn(payload => ({
      type: "updateTicketStatus",
      payload
    }))
  };
});

const showedTicket = ticketsMock[0];

function TestWrapper() {
  return (
    <Provider store={setupStore()}>
      <ModalProvider title="Edit Ticket">
        <TicketsTableModal ticketId={1} />
      </ModalProvider>
    </Provider>
  );
}

describe("Component: TicketsTableModal", () => {
  it("should render the modal with ticket details", () => {
    render(<TestWrapper />);
    expect(screen.getByText(/ID:/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(showedTicket.title)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(showedTicket.description)
    ).toBeInTheDocument();
  });

  it("should call updateTicket on input change", () => {
    render(<TestWrapper />);

    const titleInput = screen.getByDisplayValue(showedTicket.title);
    const newTitle = "New title";

    fireEvent.change(titleInput, { target: { value: newTitle } });

    expect(ticketSlice.updateTicket).toHaveBeenCalledWith({
      ...showedTicket,
      title: newTitle
    });
  });

  it("should call updateTicketStatus on status change", () => {
    render(<TestWrapper />);

    const statusSelect = screen.getByDisplayValue(showedTicket.status);

    fireEvent.change(statusSelect, { target: { value: TicketStatus.DONE } });

    expect(ticketSlice.updateTicketStatus).toHaveBeenCalledWith({
      id: showedTicket.id,
      status: TicketStatus.DONE
    });
  });

  it("should call handleSave on save button click", () => {
    render(<TestWrapper />);

    const saveButton = screen.getByText("Salvar");

    fireEvent.click(saveButton);

    expect(ticketSlice.updateTicket).toHaveBeenCalledWith(showedTicket);
  });
});
