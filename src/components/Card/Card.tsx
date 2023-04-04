import React, { useEffect, useState } from 'react';

import styles from './Card.module.css';

import Logo from '../../assets/logo.jpg';
import { CardInterface } from '../../shared/interfaces';

interface CardProps {
  card: CardInterface;
  handleChoice: (name: string) => void;
  choiceOne: string | null;
  choiceTwo: string | null;
}

const Card: React.FC<CardProps> = ({
  card,
  handleChoice,
  choiceOne,
  choiceTwo,
}) => {
  const { name, image, found } = card;
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    handleChoice(name);
    setIsClicked(true);
  };

  useEffect(() => {
    if (!choiceOne && !choiceTwo) {
      setIsClicked(false);
    }
  }, [setIsClicked, choiceOne, choiceTwo]);

  return (
    <div className={styles.card}>
      <div className={isClicked || found ? styles.flipped : ''}>
        {/* FRONT */}
        <div>
          <img className={styles.front} src={image} alt={name} />
        </div>
        {/* BACK */}
        <div className={isClicked || found ? styles.flipped : ''}>
          <img
            className={styles.back}
            src={Logo}
            alt="logo"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
