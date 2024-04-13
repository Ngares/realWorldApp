import { createReducer } from '@reduxjs/toolkit';
import type { ERegistrationKey } from 'Entities/Registration/Enums';
import { setInputErrors, setInputValue } from './Actions';
import type { IRegistrationForm } from '../Schema';

interface IRegistrationFormReduxState {
    formData: IRegistrationForm;
    formErrors: Record<ERegistrationKey, string[]>;
}

const initialState: IRegistrationFormReduxState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
    formErrors: {
        username: [],
        email: [],
        password: [],
    },
};

export const registerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setInputValue, (reducerState, action) => {
            reducerState.formData[action.payload.key] = action.payload.value;
        })

        .addCase(setInputErrors, (reducerState, action) => {
            reducerState.formErrors[action.payload.key] = action.payload.errors;
        });
});
