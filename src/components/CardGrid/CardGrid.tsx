import Card from '../Card/Card';
import styles from './CardGrid.module.css';
import cards from '../../data';

const CardGrid = () => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default CardGrid;
