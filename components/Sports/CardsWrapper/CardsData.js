import { MdSportsSoccer, MdSportsHandball, MdSportsVolleyball, MdSportsBasketball } from "react-icons/md";
import { GiCardAceHearts } from 'react-icons/gi';
import { FaDrum } from 'react-icons/fa';

export const SportsData = [
  {
    blockId: 1,
    blockName: 'Futsal Feminino',
    blockLocal: 'APCEF-PI',
    blockTime: 'Terça - 20h às 22h',
    blockIcon: <MdSportsSoccer size={50} color="#F1F2F3" />,
    blockColor: '#0062A6',
  },
  {
    blockId: 2,
    blockName: 'Futsal Masculino',
    blockLocal: 'Setor de Esportes',
    blockTime: 'Terça - 18h às 20h',
    blockIcon: <MdSportsSoccer size={50} color="#F1F2F3" />,
    blockColor: '#002C57',
  },
  {
    blockId: 3,
    blockName: 'Handebol Feminino',
    blockLocal: 'APCEF-PI',
    blockTime: 'Terça - 20h às 22h',
    blockIcon: <MdSportsHandball size={50} color="#F1F2F3" />,
    blockColor: '#0062A6',
  },
  {
    blockId: 4,
    blockName: 'Handebol Masculino',
    blockLocal: 'Setor de Esportes',
    blockTime: 'Quinta - 18h às 20h',
    blockIcon: <MdSportsHandball size={50} color="#F1F2F3" />,
    blockColor: '#002C57',
  },
  {
    blockId: 5,
    blockName: 'Vôlei Feminino',
    blockLocal: 'APCEF-PI',
    blockTime: 'Sábado - 14h às 16h',
    blockIcon: <MdSportsVolleyball size={50} color="#F1F2F3" />,
    blockColor: '#0062A6',
  },
  {
    blockId: 6,
    blockName: 'Vôlei Masculino',
    blockLocal: 'Setor de Esportes',
    blockTime: 'Domingo - 12h às 14h',
    blockIcon: <MdSportsVolleyball size={50} color="#F1F2F3" />,
    blockColor: '#002C57',
  },
  {
    blockId: 7,
    blockName: 'Basquete Feminino',
    blockLocal: 'APCEF-PI',
    blockTime: 'Sábado - 14h às 16h',
    blockIcon: <MdSportsBasketball size={50} color="#F1F2F3" />,
    blockColor: '#0062A6',
  },
  {
    blockId: 8,
    blockName: 'Basquete Masculino',
    blockLocal: 'Dom Barreto',
    blockTime: 'Sábado - 12h às 14h',
    blockIcon: <MdSportsBasketball size={50} color="#F1F2F3" />,
    blockColor: '#002C57',
  },
  {
    blockId: 9,
    blockName: 'Truco',
    blockLocal: 'APCEF-PI',
    blockTime: 'Sábado - 14h às 16h',
    blockIcon: <GiCardAceHearts size={50} color="#F1F2F3" />,
    blockColor: '#0062A6',
  },
  {
    blockId: 10,
    blockName: 'Bateria',
    blockLocal: 'APCEF-PI',
    blockTime: 'Sábado - 14h às 16h',
    blockIcon: <FaDrum size={50} color="#F1F2F3" />,
    blockColor: '#006AB2',
  },
]