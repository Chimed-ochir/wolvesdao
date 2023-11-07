import React from 'react';

import styles from './index.module.scss';
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: any;
}
export const Container = ({ children, className, id }: ContainerProps) => (
  <div style={styles} id={id} className={styles.wrapper}>
    <div className={`${styles.container} ${className}`}>{children}</div>
  </div>
);
