import React from 'react';

import styles from './index.module.scss';
interface BgDarkProps {
  toggle: () => void;
  open: boolean;
}
export const BgDark = ({ toggle, open }: BgDarkProps) => (
  <div className={`${styles.dark} ${open && styles.scale}`} onClick={toggle}></div>
);
