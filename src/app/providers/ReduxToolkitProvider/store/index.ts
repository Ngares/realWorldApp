import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registerReducer } from 'features/registration/model/slice/reducers';

const rootReducer = combineReducers({
    registerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
