import React from 'react';
import { Page } from 'Common/ui-kit/Page';
import styles from './FormLayout.module.scss';

interface IProps {
    children: React.ReactNode
}

export function FormLayout ({ children }: IProps): JSX.Element {
    return (
        <Page className={ styles.formLayout }>
            {children}
        </Page>
    );
}
