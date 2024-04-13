import cx from 'classnames';
import React from 'react';
import styles from './Title.module.scss';

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title ({ className, tag, children, ...props }: IProps): JSX.Element {
    return React.createElement(tag, { className: cx(styles.title, className), ...props }, children);
}
