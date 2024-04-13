/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Page ({ children, ...props }: IProps): JSX.Element {
    return (
        <div { ...props }>{children}</div>
    );
}
