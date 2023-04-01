import CardFlipped from '../CardFlipped/CardFlipped';
import CardFront from '../CardFront/CardFront';

const Card = () => {
  const isClicked = true;

  return isClicked ? <CardFlipped /> : <CardFront />;
};

export default Card;
