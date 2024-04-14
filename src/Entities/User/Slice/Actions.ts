import { createAction } from '@reduxjs/toolkit';
import type { IUser } from '../Models';

export const setUserData = createAction<IUser>('setUserData');
