import CardFlipped from '../CardFlipped/CardFlipped';
import CardFront from '../CardFront/CardFront';

interface CardProps {
  key: number;
  card: {
    id: number;
    name: string;
    image: string;
    found: boolean;
  };
}

const Card = ({ key, card }: CardProps) => {
  const isClicked = true;
  const { id, name, image, found } = card;

  return isClicked ? (
    <CardFlipped image={image} key={key} />
  ) : (
    <CardFront key={key} />
  );
};

export default Card;
