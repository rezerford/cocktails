/**
 * Redux Store
 */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import logger from 'redux-logger'

export function setupStore(initialState = {}) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger),
    preloadedState: initialState,
  });
}
