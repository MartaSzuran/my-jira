import { createSlice } from "@reduxjs/toolkit";
import tasksList from '../../data/tasks.js';

const initialState = tasksList;
  
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    dropTask(state, action) {
      const {id, dropResult} = action.payload;
      const currentTask = state.find(task => task.id === id);
      if (currentTask) {
        currentTask.type = dropResult;
      } 
    },
    editTask(state, action) {
      const {id, title, type, description} = action.payload;
      const currentTask = state.find(task => task.id === id);
      if (currentTask) {
        currentTask.type = type;
        currentTask.title = title;
        currentTask.description = description;
      }
    }
  },
});

export const { addTask, dropTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;