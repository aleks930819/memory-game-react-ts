import CardGrid from '../CardGrid/CardGrid';
import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>
      <CardGrid />
    </div>
  );
};

export default Container;
