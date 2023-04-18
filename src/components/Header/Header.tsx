import React, { FC, ReactElement } from 'react';

import styles from './Header.module.css';

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <h1>Marvel Heroes Memory Game</h1>
    </header>
  );
};

export default Header;
