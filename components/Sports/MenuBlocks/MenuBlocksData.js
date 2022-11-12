import { MdSportsSoccer, MdSportsHandball, MdSportsVolleyball, MdSportsBasketball } from "react-icons/md";
import { GiCardAceHearts } from 'react-icons/gi';
import { FaDrum } from 'react-icons/fa';

export const blocksList = [
  {
    blockId: 1,
    blockName: 'Futsal',
    blockIcon: <MdSportsSoccer size={50} color="#FFF" />,
    blockColor: '#002C57',
  },
  {
    blockId: 2,
    blockName: 'Handebol',
    blockIcon: <MdSportsHandball size={50} color="#FFF" />,
    blockColor: '#00376F',
  },
  {
    blockId: 3,
    blockName: 'Vôlei',
    blockIcon: <MdSportsVolleyball size={50} color="#FFF" />,
    blockColor: '#004C89',
  },
  {
    blockId: 4,
    blockName: 'Basquete',
    blockIcon: <MdSportsBasketball size={50} color="#FFF" />,
    blockColor: '#005793',
  },
  {
    blockId: 5,
    blockName: 'Truco',
    blockIcon: <GiCardAceHearts size={50} color="#FFF" />,
    blockColor: '#0062A6',
  },
  {
    blockId: 6,
    blockName: 'Bateria',
    blockIcon: <FaDrum size={50} color="#FFF" />,
    blockColor: '#006AB2',
  },
]