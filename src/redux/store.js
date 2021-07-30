import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// logger helps to demonstrate the change of reducer in every step
const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;
