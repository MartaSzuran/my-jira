import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, postData, putData } from '../../api/index.js';

const initialState = {
  tasks: [],
  isLoading: true,
  error: null
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (searchValue) => {
  if (searchValue) {
    const response = await getData(`/tasks?searchValue=${searchValue}`);
    return response.data;
  } else {
    const response = await getData('/tasks/');
    return response.data;
  }
});

export const addNewTask = createAsyncThunk('tasks/addNewTask', async (initalTask, { dispatch }) => {
  const response = await postData('/tasks/addNew', initalTask);
  if (response.status === 200) {
    dispatch(fetchTasks());
  }
});

export const editCurrentTask = createAsyncThunk('tasks/editCurrentTask', async ({ id, title, author, type, description }) => {
  const response = await putData('/tasks/editTask', { id, title, author, type, description });
  return response.data;
});

export const dropTask = createAsyncThunk('tasks/dropTask', async ({ id, dropResult }, { dispatch }) => {
  const response = await putData('/tasks/dropTask', { id, dropResult });
  if (response.status === 200) {
    dispatch(fetchTasks());
  }
});
  
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    editTaskFields(state, action) {
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
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    })
    .addCase(addNewTask.pending, (state, action) => {
      state.isLoading = true;
    })
  },
});

export const { editTaskFields } = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectAllTasks = state => state.tasks.tasks;

export const selectTaskById = (state, taskId) => state.tasks.tasks.find(task => task.id === taskId);
