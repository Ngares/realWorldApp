import React from 'react';
import styles from './Some.module.scss';

export default function Some (): JSX.Element {
    return (
        <div className={ styles.color }>
            <p>здесь должен быть синий цвет</p>
        </div>
    );
}
