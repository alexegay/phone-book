import {
  combineReducers,
  applyMiddleware,
  createStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducers/counterReducer";
import rootSaga from "./sagas/root";

const rootReducer = combineReducers({
  sample: counterReducer,
});

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
