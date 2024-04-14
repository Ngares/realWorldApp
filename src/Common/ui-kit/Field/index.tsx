/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames';
import React from 'react';
import styles from './Field.module.scss';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    input: React.ReactNode;
    inputErrors: React.ReactNode;
}

export function Field ({ input, className, inputErrors, ...props }: IProps): JSX.Element {
    return (
        <div className={ cx(styles.field, className) } { ...props }>
            {input}

            {inputErrors}
        </div>
    );
}
