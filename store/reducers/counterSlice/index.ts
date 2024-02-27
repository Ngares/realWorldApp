import { createSlice } from '@reduxjs/toolkit';

interface ICounter {
    value: number
}

const initialState: ICounter = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increment: (reducerState) => {
            reducerState.value += 1;
        },
        decrement: (reducerState) => {
            reducerState.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice;
