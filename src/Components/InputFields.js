import { Fragment, useRef, useState } from "react";
import classes from "./InputField.module.css";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../store/ExpenseReducer";

const Input = () => {
  const taskRef = useRef();
  const explainRef = useRef();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.expense);
  const done = useSelector((state) => state.expense);

  const submitHandler = (event) => {
    event.preventDefault();
    let task = {
      id: Math.random().toString(),
      task: taskRef.current.value,
      explain: explainRef.current.value,
    };

    dispatch(expenseActions.addExpense(task));
  };

  function deleteHandler(id) {
    dispatch(expenseActions.deleteExpense(id));
  }

  function taskDone(id) {
    dispatch(expenseActions.doneTask(id));
  }

  function remove(id) {
    dispatch(expenseActions.removeTask(id));
  }

  let arrMap = show.tasks.map((i) => {
    return (
      <div key={i.id} className={classes.div}>
        {i.task} {i.explain}
        <button className={classes.button} onClick={() => taskDone(i)}>
          Mark as Done
        </button>
        <button className={classes.button} onClick={() => deleteHandler(i.id)}>
          Delete
        </button>
      </div>
    );
  });

  let completed = done.taskdone.map((i) => {
    return (
      <div key={i.id}>
        <div>
          {i.task} {i.explain}
          <button className={classes.button} onClick={() => remove(i.id)}>
            Remove
          </button>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className="add-task">Add Task</div>
        <div className={classes.main_div}>
          <div>
            <input placeholder="Task Name" type="text" ref={taskRef} />
          </div>
          <div>
            <input placeholder="Explain" type="text" ref={explainRef} />
          </div>
          <button className={classes.button} type="submit">
            Add Task
          </button>
        </div>
      </form>
      <div>
        <div className={classes.to_do}>Task to Do</div>
        <div>{arrMap}</div>
      </div>
      <div>
        <div className={classes.to_do}>Completed Task</div>
        <div>{completed}</div>
      </div>
    </Fragment>
  );
};
export default Input;
