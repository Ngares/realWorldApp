import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counterSlice';

const rootReducer = combineReducers({
    counterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
