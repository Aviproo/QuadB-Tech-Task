import { createSlice } from "@reduxjs/toolkit";

const initialExpense = {
  tasks: JSON.parse(localStorage.getItem("task")) || [],
  taskdone: JSON.parse(localStorage.getItem("taskdone")) || [],
};
const expense = createSlice({
  name: "expense",
  initialState: initialExpense,
  reducers: {
    addExpense(state, action) {
      let task = JSON.parse(localStorage.getItem("task")) || [];
      task.push(action.payload);
      localStorage.setItem("task", JSON.stringify(task));
      state.tasks = JSON.parse(localStorage.getItem("task"));
    },
    deleteExpense(state, action) {
      let task = JSON.parse(localStorage.getItem("task"));
      let filter = task.filter((i) => i.id != action.payload);
      localStorage.setItem("task", JSON.stringify(filter));
      state.tasks = JSON.parse(localStorage.getItem("task"));
    },
    doneTask(state, action) {
      let taskdone = JSON.parse(localStorage.getItem("taskdone")) || [];
      taskdone.push(action.payload);
      localStorage.setItem("taskdone", JSON.stringify(taskdone));
      state.taskdone = JSON.parse(localStorage.getItem("taskdone"));

      let task = JSON.parse(localStorage.getItem("task"));
      let filter = task.filter((i) => i.id != action.payload.id);
      localStorage.setItem("task", JSON.stringify(filter));
      state.tasks = JSON.parse(localStorage.getItem("task"));
    },
    removeTask(state, action) {
      let taskdone = JSON.parse(localStorage.getItem("taskdone"));
      let filter = taskdone.filter((i) => i.id != action.payload);
      localStorage.setItem("taskdone", JSON.stringify(filter));
      state.taskdone = JSON.parse(localStorage.getItem("taskdone"));
    },
  },
});
export const expenseActions = expense.actions;
export default expense.reducer;
