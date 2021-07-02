import { v4 as uuidv4 } from 'uuid';

import appple from '../images/trees/apple-tree.jpeg';
import blackCherry from '../images/trees/black-cherry.jpeg';
import butternut from '../images/trees/butternut.jpeg';
import easternRedCedar from '../images/trees/eastern-red-cedar.jpeg';
import fraserFir from '../images/trees/fraser-fir-tree.jpeg';
import redSpruce from '../images/trees/Red_spruce_tree.jpeg';
import redPine from '../images/trees/red-pine.jpeg';
import sourCherry from '../images/trees/sour-cherry-trees.jpeg';
import tanoak from '../images/trees/tanoak-tree.jpeg';
import weepingNootkaCypress from '../images/trees/weeping-nootka-cypress-tree-garden.jpeg';
import yellowBirch from '../images/trees/yellow-birch.jpeg';

const treesDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum....`;

export const treesData = [
  {
    id: uuidv4(),
    title: 'Apple',
    price: '92',
    qty: 17,
    description: treesDescription,
    backgroundUrl: `url("${appple}")`,
  },
  {
    id: uuidv4(),
    title: 'black cherry',
    price: '72',
    qty: 10,
    description: treesDescription,
    backgroundUrl: `url("${blackCherry}")`,
  },
  {
    id: uuidv4(),
    title: 'butternut',
    price: '65',
    qty: 9,
    description: treesDescription,
    backgroundUrl: `url("${butternut}")`,
  },
  {
    id: uuidv4(),
    title: 'eastern red cedar',
    price: '152',
    qty: 25,
    description: treesDescription,
    backgroundUrl: `url("${easternRedCedar}")`,
  },
  {
    id: uuidv4(),
    title: 'fraser fir',
    price: '83',
    qty: 29,
    description: treesDescription,
    backgroundUrl: `url("${fraserFir}")`,
  },
  {
    id: uuidv4(),
    title: 'red spruce',
    price: '83',
    qty: 21,
    description: treesDescription,
    backgroundUrl: `url("${redSpruce}")`,
  },

  {
    id: uuidv4(),
    title: 'red pine',
    price: '43',
    qty: 18,
    description: treesDescription,
    backgroundUrl: `url("${redPine}")`,
  },
  {
    id: uuidv4(),
    title: 'sour cherry',
    price: '69',
    qty: 27,
    description: treesDescription,
    backgroundUrl: `url("${sourCherry}")`,
  },

  {
    id: uuidv4(),
    title: 'tanoak',
    price: '102',
    qty: 32,
    description: treesDescription,
    backgroundUrl: `url("${tanoak}")`,
  },

  {
    id: uuidv4(),
    title: 'weeping nootka cypress',
    price: '117',
    qty: 41,
    description: treesDescription,
    backgroundUrl: `url("${weepingNootkaCypress}")`,
  },

  {
    id: uuidv4(),
    title: 'yellow birch',
    price: '39',
    qty: 34,
    description: treesDescription,
    backgroundUrl: `url("${yellowBirch}")`,
  },
];
