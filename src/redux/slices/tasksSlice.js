import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData } from '../../api/index.js';

const initialState = {
  tasks: [],
  isLoading: true,
  error: null
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await getData('/tasks/');
  return response.data;
});

export const addNewTask = createAsyncThunk('tasks/addNewTask', async initalTask => {
  const response = await postData('/tasks/addNew', initalTask);
  if (response.status === 200) {
    fetchTasks();
  }
  return response.data;
})
  
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    dropTask(state, action) {
      const {id, dropResult} = action.payload;
      const currentTask = state.tasks.find(task => task.id === id);
      if (currentTask) {
        currentTask.type = dropResult;
      } 
    },
    editTask(state, action) {
      const {id, title, type, description} = action.payload;
      const currentTask = state.tasks.find(task => task.id === id);
      if (currentTask) {
        currentTask.type = type;
        currentTask.title = title;
        currentTask.description = description;
      }
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchTasks.pending, (state, action) => {
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    })
    .addCase(addNewTask.pending, (state, action) => {
      state.isLoading = true;
    })
  },
});

export const { addTask, dropTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectAllTasks = state => state.tasks.tasks;

export const selectTaskById = (state, taskId) => state.tasks.tasks.find(task => task.id === taskId);
