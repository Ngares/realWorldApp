/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import InputError from '../InputError';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string[];
}

export function Input ({ error, ...props }: IProps): JSX.Element {
    return (
        <>
            <input { ...props } />
            {error ? <InputError>{error?.join(',')}</InputError> : null}
        </>
    );
}
