import { createSlice } from "@reduxjs/toolkit";
import tasksList from '../data/tasks.js';

const initialState = tasksList;
  
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(state, action) {
      state.push(action.payload);
    },
    taskDropped(state, action) {
      const {id, dropResult} = action.payload;
      const currentTask = state.find(task => task.id === id);
      if (currentTask) {
        currentTask.type = dropResult;
      } 
    },
    taskEdited(state, action) {
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

export const { taskAdded, taskDropped, taskEdited } = tasksSlice.actions;

export default tasksSlice.reducer;