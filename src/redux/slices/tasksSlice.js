import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, patchData } from '../../api/index.js';

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
});

export const editCurrentTask = createAsyncThunk('tasks/editCurrentTask', async currentTask => {
  const response = await patchData('/tasks/editTask', currentTask);
  if (response.status === 200) {
    fetchTasks();
  }
});
  
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
  },
  extraReducers(builder) {
    builder
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    })
    .addCase(addNewTask.pending, (state, action) => {
      state.isLoading = true;
    })
  },
});

export const { dropTask } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectAllTasks = state => state.tasks.tasks;

export const selectTaskById = (state, taskId) => state.tasks.tasks.find(task => task.id === taskId);
