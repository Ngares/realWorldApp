/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames';
import React from 'react';
import styles from './Input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    id: string;
}

export function Input ({ id, className, value, ...props }: IProps): JSX.Element {
    return (
        <input
            className={ cx(styles.input, className) }
            id={ id }
            value={ value }
            { ...props }
        />
    );
}
