import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../components/tasksSlice.js'

export default configureStore({
  reducer: {
    tasks: tasksSlice,
  }
});