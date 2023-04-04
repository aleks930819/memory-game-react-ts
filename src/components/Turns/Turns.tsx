import React from 'react';

import styles from './Turns.module.css';

interface TurnsProps {
  turns: number;
}

const Turns = ({ turns }: TurnsProps) => {
  return (
    <div className={styles.footer}>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default Turns;
