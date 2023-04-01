import styles from './CardFlipped.module.css';
interface CardFlippedInterface {
  image: string;
};

const CardFlipped = ({ image }: CardFlippedInterface) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__flipped}>
        <img src={image} alt="logo" />
      </div>
    </div>
  );
};

export default CardFlipped;
