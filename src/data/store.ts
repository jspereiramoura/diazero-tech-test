import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ticketSlice from "./slices/ticketSlice";

const rootReducer = combineReducers({
  tickets: ticketSlice
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;
