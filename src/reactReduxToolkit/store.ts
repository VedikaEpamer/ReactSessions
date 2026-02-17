import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import productApiReducer from "./slices/productApiSlice";

import {
  persistStore,
  persistReducer,
  REGISTER,
  PURGE,
  PERSIST,
  PAUSE,
  REHYDRATE,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router";

//currying
const loggingMiddleware1 = (store: any) => (next: any) => (action: any) => {
  console.log("1st Dispatching action:", action);

  const result = next(action);

  console.log("1st Next state:", store.getState());
  return result;
};

//currying
const loggingMiddleware2 = (store: any) => (next: any) => (action: any) => {
  console.log("2nd Dispatching action:", action);

  const result = next(action);

  console.log("2nd Next state:", store.getState());
  return result;
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product"], // Specify which reducers to persist
  blacklist: ["productApi"], // Specify which reducers not to persist
};

const rootReducer = combineReducers({
  product: productReducer,
  productApi: productApiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(loggingMiddleware1, loggingMiddleware2),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
