import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasksSlice";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ ...task, description }));
    setIsEditing(false);
  };
  return (
    <li className="task-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="remove-task-button" type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{description}</span>
          <button className="remove-task-button" onClick={handleEdit}>Edit</button>
          
        </>
      )}
    </li>
  );
};

export default Task;
