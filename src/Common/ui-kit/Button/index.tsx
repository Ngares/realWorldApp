/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'submit' | 'reset' | 'button';
}

export function Button ({ className, children, type, ...props }: IProps): JSX.Element {
    return (
        <button className={ cx(styles.button, className) } type={ type } { ...props }>
            {children}
        </button>
    );
}
