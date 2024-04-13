/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames';
import React from 'react';
import styles from './InputError.module.scss';

interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
    error: string;
}

export function InputError ({ className, error, ...props }: IProps): JSX.Element {
    return (
        <p
            className={ cx(styles.inputError, className) }
            { ...props }
        >
            {error}
        </p>
    );
}
