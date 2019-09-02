import React from 'react';
import uuidv4 from 'uuid';
import MainMenuNav from './MainMenuNav';
import MainMenuNavItem from './MainMenuNavItem';
import MainMenuSeparator from './MainMenuSeparator';
import { SEPARATOR, MENU, MENU_ITEM } from './constants';

const traverseNode = (node, visitor) => {
  const { kind, props, children } = node;
  return visitor[kind]({ props, children });
};

const traverseArray = (nodes, visitor) => {
  return nodes.map(node => traverseNode(node, visitor));
};

const visitor = {
  [MENU]: ({ children = [] }) => (
    <MainMenuNav key={ uuidv4() }>
      { traverseArray(children, visitor) }
    </MainMenuNav>
  ),
  [SEPARATOR]: () => <MainMenuSeparator key={ uuidv4() } />,
  [MENU_ITEM]: ({ props, children = [] }) => {
    const { id, text, context, onClick } = props;
    return (
      <MainMenuNavItem
        key={ uuidv4() }
        id={ id }
        text={ text }
        context={ context }
        onClick={ onClick }
      >
        { traverseArray(children, visitor) }
      </MainMenuNavItem>
    )
  },
};

export const renderMenu = (node) => {
  return traverseNode(node, visitor);
};
