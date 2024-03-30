import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IUserInfo } from '../models';

export const registerUser = createAsyncThunk(
    'registerUser',
    async (userInfo: IUserInfo) => {
        try {
            return await axios.post('https://api.realworld.io/api/users', { user: userInfo });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error;
            } else {
                throw new Error('Unknown Error SRY =(');
            }
        }
    },
);
