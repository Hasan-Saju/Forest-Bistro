import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from "redux-logger";

// logger helps to demonstrate the change of reducer in every step
const myStore = createStore(Reducer, applyMiddleware(logger));

export default myStore;
