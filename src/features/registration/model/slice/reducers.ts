import { createReducer } from '@reduxjs/toolkit';
import { registerUser } from './actions';
import { initialState } from '../consts';

export const registerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (reducerState, action) => {
            console.log(action.payload, reducerState);
        });
});
