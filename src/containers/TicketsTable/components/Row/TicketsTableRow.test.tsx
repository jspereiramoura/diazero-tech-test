import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { vi } from "vitest";
import * as ticketSlice from "../../../../data/slices/ticketSlice";
import setupStore from "../../../../data/store";
import { ticketsMock } from "../../../../mocks/ticketListMock";
import { Ticket, TicketStatus } from "../../../../types/Ticket";
import TicketsTableRow from "./TicketsTableRow";

vi.mock("../../../../data/slices/ticketSlice", async () => {
  const originalModule = await vi.importActual(
    "../../../../data/slices/ticketSlice"
  );
  return {
    ...originalModule,
    updateTicketStatus: vi.fn(payload => ({
      type: "updateTicketStatus",
      payload
    }))
  };
});

const mockedTicket: Ticket = ticketsMock[0];

function TestWrapper({ onTicketClick = vi.fn() }) {
  return (
    <Provider store={setupStore()}>
      <TicketsTableRow ticket={mockedTicket} onTicketClick={onTicketClick} />
    </Provider>
  );
}

describe("Component: TicketsTableRow", () => {
  it("should renders ticket details correctly", () => {
    render(<TestWrapper />);

    expect(screen.getByText(mockedTicket.id)).toBeInTheDocument();
    expect(screen.getByText(mockedTicket.title)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(TicketStatus.IN_PROGRESS)
    ).toBeInTheDocument();
  });

  it("should call onTicketClick when row is clicked", () => {
    const onTicketClick = vi.fn();
    render(<TestWrapper onTicketClick={onTicketClick} />);

    fireEvent.click(screen.getByText(mockedTicket.id));
    expect(onTicketClick).toHaveBeenCalledWith(mockedTicket);
  });

  it("should dispatch updateTicketStatus when status is changed", () => {
    render(<TestWrapper />);

    fireEvent.change(screen.getByDisplayValue(TicketStatus.IN_PROGRESS), {
      target: { value: TicketStatus.DONE }
    });

    expect(ticketSlice.updateTicketStatus).toHaveBeenCalledWith({
      id: 1,
      status: TicketStatus.DONE
    });
  });
});
