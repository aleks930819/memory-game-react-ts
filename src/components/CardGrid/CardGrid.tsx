import Card from '../Card/Card';
import styles from './CardGrid.module.css';
import cards from '../../data';

const CardGrid = () => {
  const shuffledCards = cards.sort(() => Math.random() - 0.5);

  return (
    <div className={styles.container}>
      {shuffledCards.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default CardGrid;
