import ReactDom from 'react-dom';

import styles from './Modal.module.css';

interface ModalProps {
  turns: number;
  resetGame: () => void;
}
const Modal = ({ turns, resetGame }: ModalProps) => {
  const clickHandler = () => {
    resetGame();
  };

  return ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>You Win!</h2>
        <p>Turns: {turns}</p>
        <button onClick={clickHandler}>Play Again?</button>
      </div>
    </div>,
    document.getElementById('modal')!
  );
};

export default Modal;
