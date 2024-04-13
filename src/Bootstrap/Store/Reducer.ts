import { combineReducers } from '@reduxjs/toolkit';
import { registerReducer } from 'Entities/Registration/Entities/RegistrationForm/Slice/Reducer';
import { userReducer } from 'Entities/User/Slice/Reducer';

export const rootReducer = combineReducers({
    register: registerReducer,
    user: userReducer,
});
