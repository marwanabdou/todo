import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import shortid from 'shortid';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: shortid.generate(), description: task, isDone: false }));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button className="task-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;
