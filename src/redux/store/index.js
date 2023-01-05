import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../slices/tasksSlice.js';

export default configureStore({
  reducer: {
    tasks: tasksSlice,
  }
});