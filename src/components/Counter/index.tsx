import React from 'react';
import styles from './Counter.module.scss';
import { increment, decrement } from '../../../store/reducers/counterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export default function Counter (): JSX.Element {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counterReducer);

    const handleIncrement = (): void => {
        dispatch(increment());
    };

    const handleDecrement = (): void => {
        dispatch(decrement());
    };

    return (
        <div className={ styles.counter }>
            <h1>{count.value}</h1>
            <button onClick={ handleIncrement } type="button">increment</button>
            <button onClick={ handleDecrement } type="button">decrement</button>
        </div>
    );
}
