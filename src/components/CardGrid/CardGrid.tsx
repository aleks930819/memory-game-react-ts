import React from 'react';

import styles from './CardGrid.module.css';

import Card from '../Card/Card';
import cards from '../../data';
import { useState, useEffect } from 'react';
import { CardInterface } from '../../shared/interfaces';
import CardFooter from '../CardFooter/CardFooter';

const CardGrid: React.FC = () => {
  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  const [cardsArray, setCardsArray] = useState<CardInterface[]>([
    ...shuffledCards,
  ]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<string | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<string | null>(null);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  useEffect(() => {
    if (choiceOne !== null && choiceTwo !== null) {
      setTimeout(() => {
        if (choiceOne === choiceTwo) {
          setCardsArray((prevCards) =>
            prevCards.map((card) => {
              if (card.name === choiceOne) {
                return { ...card, found: true };
              }
              return card;
            })
          );
        }
        resetTurn();
      }, 1000);
    }
  }, [choiceOne, choiceTwo, cardsArray]);

  const handleChoice = (name: string) => {
    if (!choiceOne) {
      setChoiceOne(name);
    } else if (!choiceTwo) {
      setChoiceTwo(name);
    }
  };

  return (
    <div className={styles.container}>
      {cardsArray.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
        />
      ))}
      <CardFooter turns={turns} />
    </div>
  );
};

export default CardGrid;
