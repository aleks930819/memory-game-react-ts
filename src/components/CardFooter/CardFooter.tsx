import React from 'react';

import styles from './CardFooter.module.css';

interface CardFooterProps {
  turns: number;
}

const CardFooter = ({ turns }: CardFooterProps) => {
  return (
    <div className={styles.footer}>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default CardFooter;
