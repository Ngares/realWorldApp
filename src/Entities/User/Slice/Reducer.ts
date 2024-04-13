import { createReducer } from '@reduxjs/toolkit';
import { setUserData } from './Actions';
import type { IUserInfo } from '../Models';

interface IUserReduxState {
    data: IUserInfo
}

const initialState: IUserReduxState = {
    data: {
        bio: '',
        email: '',
        image: '',
        token: '',
        username: '',
    },
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserData, (reducerState, action) => {
            reducerState.data = action.payload.user;
        });
});
