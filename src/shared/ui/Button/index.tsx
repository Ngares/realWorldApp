/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type: 'submit' | 'reset' | 'button';
}

export function Button ({ children, type, ...props }: IProps): JSX.Element {
    return (

        <button type={ type } { ...props }>
            {children}
        </button>
    );
}
