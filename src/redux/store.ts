/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
// browser localStorage
import storage from "redux-persist/lib/storage";

import { baseApi } from "./api/baseApi";
import authReducer from "./features/user/authSlice";
import verifyAuthReducer from "./features/verifyAuth/verifyAuth";

// SSR-safe noop storage (for server-side rendering)
const noopStorage = {
  getItem: async (_key: string) => null,
  setItem: async (_key: string, _value: string) => {},
  removeItem: async (_key: string) => {},
};

// root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  verifyAuth: verifyAuthReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "root",
  storage: typeof window === "undefined" ? noopStorage : storage,
  whitelist: ["auth"],
  // blacklist: [baseApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // redux-persist middleware non-serializable action check ignore
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;

export const persistor = persistStore(store);
