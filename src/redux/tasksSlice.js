import { createSlice } from "@reduxjs/toolkit";
import shortid from 'shortid';



export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
              id: shortid.generate(),
              name: action.payload.task,
              createdAt: new Date().toString(),
            };
            state.push(newTask);
          },
    
    editTask: (state, action) => {
      const taskIndex = state.findIndex(
        (task) => task.id === action.payload.id
      );
      state[taskIndex] = action.payload;
    },
  },
});

export const { addTask, deleteTask, editTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
