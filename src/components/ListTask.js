import React from 'react';
import Task from './Task';
import { useSelector } from "react-redux";

const ListTask = () => {
    const tasks = useSelector(state => state.tasks);


	return (
		<ul className='tasks-list'>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
	);
};

export default ListTask;