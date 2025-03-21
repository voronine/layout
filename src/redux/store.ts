import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/aythSlice';
import usersReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
