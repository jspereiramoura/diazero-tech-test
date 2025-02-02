import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ticketsMock } from "../../mocks/ticketListMock";
import { Ticket } from "../../types/Ticket";

const initialState = ticketsMock;

const ticketSlice = createSlice({
  initialState,
  name: "ticket",
  reducers: {
    addNewTicket: (state, action: PayloadAction<Ticket>) => {
      state.push(action.payload);
    },
    removeTicket: (state, action: PayloadAction<Ticket["id"]>) => {
      return state.filter(ticket => ticket.id !== action.payload);
    },
    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const { id, ...ticket } = action.payload;
      const ticketIndex = state.findIndex(ticket => ticket.id === id);
      state[ticketIndex] = { ...state[ticketIndex], ...ticket };
    },
    updateTicketStatus: (
      state,
      action: PayloadAction<Pick<Ticket, "id" | "status">>
    ) => {
      const { id, status } = action.payload;
      const ticketIndex = state.findIndex(ticket => ticket.id === id);
      state[ticketIndex].status = status;
    },
    addTicketComment: (
      state,
      action: PayloadAction<{
        ticketId: Ticket["id"];
        comment: { author: string; text: string };
      }>
    ) => {
      const { ticketId, comment } = action.payload;
      const ticketIndex = state.findIndex(ticket => ticket.id === ticketId);
      state[ticketIndex].comments ??= [];
      state[ticketIndex].comments.unshift(comment);
    }
  }
});

export const {
  addNewTicket,
  addTicketComment,
  removeTicket,
  updateTicket,
  updateTicketStatus
} = ticketSlice.actions;
export default ticketSlice.reducer;
