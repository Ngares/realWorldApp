/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-empty-interface */
import cx from 'classnames';
import React from 'react';
import styles from './Form.module.scss';

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export function Form ({ className, children, ...props }: IProps): JSX.Element {
    return (
        <form className={ cx(styles.form, className) } { ...props }>{children}</form>
    );
}
