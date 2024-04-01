import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IUserInfo, IUserRegistrationResponse } from '../models';

export const registerUser = createAsyncThunk(
    'registerUser',
    async (userInfo: IUserInfo) => {
        try {
            return await axios.post<IUserRegistrationResponse>('https://api.realworld.io/api/users', { user: userInfo });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error;
            } else {
                throw new Error('Unknown Error SRY =(');
            }
        }
    },
);
