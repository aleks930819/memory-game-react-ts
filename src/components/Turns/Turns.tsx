import React, { FC, ReactElement } from 'react';

import styles from './Turns.module.css';

interface TurnsProps {
  turns: number;
}

const Turns: FC<TurnsProps> = ({ turns }): ReactElement => {
  return (
    <div className={styles.footer}>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default Turns;
