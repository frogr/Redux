import { combineReducers } from "redux";
import ToDoReducer from "./todos";

const rootReducer = combineReducers({
  todos: ToDoReducer
});

export default rootReducer;
