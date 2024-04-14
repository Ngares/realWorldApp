import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { ERegistrationKey } from 'Entities/Registration/Enums';
import type { IUser } from 'Entities/User/Models';
import { setUserData } from 'Entities/User/Slice/Actions';
import type { IRegistrationForm } from '../Schema';

export const setInputValue = createAction('setRegistrationFormValue', (key: ERegistrationKey, value: string) => ({
    payload: { key, value },
}));

export const setInputErrors = createAction('setRegistrationFormFieldErrors', (key: ERegistrationKey, errors: string[]) => ({
    payload: { key, errors },
}));

export const registerUser = createAsyncThunk(
    'registerUser',
    async (userInfo: IRegistrationForm, { dispatch }) => {
        try {
            const response = await axios.post<IUser>('https://api.realworld.io/api/users', { user: userInfo });

            if (response.data) {
                dispatch(setUserData(response.data));
                localStorage.setItem('userToken', response.data.user.token);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error;
            } else {
                throw new Error('Unknown Error SRY =(');
            }
        }
    },
);
