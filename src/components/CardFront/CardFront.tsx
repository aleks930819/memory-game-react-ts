import styles from './CradFront.module.css';

import Logo from '../../assets/logo.jpg';

const CardFront = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__front}>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default CardFront;
