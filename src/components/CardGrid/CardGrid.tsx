import React, { useState, useEffect } from 'react';

import styles from './CardGrid.module.css';

import { CardInterface } from '../../shared/interfaces';

import cards from '../../data';

import Card from '../Card/Card';
import CardFooter from '../CardFooter/CardFooter';
import Modal from '../Modal/Modal';

const CardGrid: React.FC = () => {
  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  const [cardsArray, setCardsArray] = useState<CardInterface[]>([
    ...shuffledCards,
  ]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<string | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<string | null>(null);
  const isAllCardsFound = cardsArray.every((card) => card.found);
  const [showModal, setShowModal] = useState<boolean>(false);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const resetGame = () => {
    setCardsArray([...shuffledCards]);
    setShowModal(false);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
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
      }, 500);
    }
  }, [choiceOne, choiceTwo, cardsArray]);

  useEffect(() => {
    isAllCardsFound ? setShowModal(true) : setShowModal(false);
  }, [setShowModal, isAllCardsFound]);

  const handleChoice = (name: string) => {
    choiceOne == null ? setChoiceOne(name) : setChoiceTwo(name);
  };

  return (
    <div className={styles.container}>
      {cardsArray.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          choiceOne={choiceOne}
          choiceTwo={choiceTwo}
        />
      ))}
      <CardFooter turns={turns} />
      {showModal && <Modal turns={turns} resetGame={resetGame} />}
    </div>
  );
};

export default CardGrid;
