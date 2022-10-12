import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getNewsEpic, getNewsMoreEpic } from "../epic/index";
import { newsReducer } from "./slicesList";


const epic = combineEpics(
  getNewsEpic,
  getNewsMoreEpic
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: newsReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(epic);

export default store;