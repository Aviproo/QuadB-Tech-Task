import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "./ExpenseReducer";

const store = configureStore({
  reducer: { expense: ExpenseReducer },
});

export default store;
