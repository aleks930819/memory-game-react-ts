import styles from './CardFlipped.module.css';

type Props = {};

const CardFlipped = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__flipped}>
        <img
          src="https://secure.img1-cg.wfcdn.com/im/80552794/compr-r85/1217/121719698/thor-avengers-animated-standup.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default CardFlipped;
