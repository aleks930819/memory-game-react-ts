import styles from './CradFront.module.css';

type Props = {};

const CardFront = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__front}>
        <img
          src="https://i.pinimg.com/originals/b5/34/df/b534df05c4b06ebd32159b2f9325d83f.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default CardFront;
