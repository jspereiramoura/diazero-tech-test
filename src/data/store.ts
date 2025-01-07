import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from "./slices/ticketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
