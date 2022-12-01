import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import todoReducer from "../reducer/todo-reducer";

const store=createStore(todoReducer,applyMiddleware(logger))

export default store