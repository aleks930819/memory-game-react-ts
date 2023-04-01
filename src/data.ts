import Thor from './assets/thor.png';
import Ironman from './assets/ironman.png';
import Hawkeye from './assets/hawkeye.png';
import Hulk from './assets/hulk.png';
import Blackwidow from './assets/blackwidow.png';
import Spiderman from './assets/spiderman.png';
import Loki from './assets/loki.png';
import CapitanAmerica from './assets/capitan-america.png';

export interface Card {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
  found: boolean;
}

const cards: Card[] = [
  {
    id: 1,
    name: 'thor',
    image: Thor,
    flipped: false,
    found: false,
  },
  {
    id: 2,
    name: 'thor',
    image: Thor,
    flipped: false,
    found: false,
  },
  {
    id: 3,
    name: 'iron-man',
    image: Ironman,
    flipped: false,
    found: false,
  },
  {
    id: 4,
    name: 'iron-man',
    image: Ironman,
    flipped: false,
    found: false,
  },
  {
    id: 5,
    name: 'hawkeye',
    image: Hawkeye,
    flipped: false,
    found: false,
  },
  {
    id: 6,
    name: 'hawkeye',
    image: Hawkeye,
    flipped: false,
    found: false,
  },
  {
    id: 7,
    name: 'hulk',
    image: Hulk,
    flipped: false,
    found: false,
  },
  {
    id: 8,
    name: 'hulk',
    image: Hulk,
    flipped: false,
    found: false,
  },
  {
    id: 9,
    name: 'blackwidow',
    image: Blackwidow,
    flipped: false,
    found: false,
  },
  {
    id: 10,
    name: 'blackwidow',
    image: Blackwidow,
    flipped: false,
    found: false,
  },
  {
    id: 11,
    name: 'spiderman',
    image: Spiderman,
    flipped: false,
    found: false,
  },
  {
    id: 12,
    name: 'spiderman',
    image: Spiderman,
    flipped: false,
    found: false,
  },
  {
    id: 13,
    name: 'capitan-america',
    image: CapitanAmerica,
    flipped: false,
    found: false,
  },
  {
    id: 14,
    name: 'capitan-america',
    image: CapitanAmerica,
    flipped: false,
    found: false,
  },
  {
    id: 15,
    name: 'loki',
    image: Loki,
    flipped: false,
    found: false,
  },
  {
    id: 16,
    name: 'loki',
    image: Loki,
    flipped: false,
    found: false,
  },
];

export default cards;
