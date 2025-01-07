import { createSlice } from "@reduxjs/toolkit";
import { ticketsMock } from "../../mocks/ticketListMock";

const initialState = ticketsMock;

const ticketSlice = createSlice({
  initialState,
  name: "ticket",
  reducers: {
    addNewTicket: (state, action) => {
      state.push(action.payload);
    },
    removeTicket: (state, action) => {
      return state.filter(ticket => ticket.id !== action.payload);
    },
    updateTicket: (state, action) => {
      const { id, ...ticket } = action.payload;
      const ticketIndex = state.findIndex(ticket => ticket.id === id);
      state[ticketIndex] = { ...state[ticketIndex], ...ticket };
    }
  }
});

export const { addNewTicket, removeTicket, updateTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
