import React from 'react';
import styles from './inputError.module.scss';

interface IInputError extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode
}

export default function InputError ({ children }:IInputError): JSX.Element {
    return (
        <p className={ styles.error }>
            {children}
        </p>
    );
}
