import React from 'react';
import uuidv4 from 'uuid';
import MainMenuNavItem from './MainMenuNavItem';
import MainMenuSeparator from './MainMenuSeparator';
import { SEPARATOR } from './constants';

// Recursively render the main menu from data
export const renderMenu = (items) => {
  const props = { className: 'c-MainMenu_Nav' };
  const kids = items.reduce((accum, current) => {
    const { id, kind, text, context, onClick, children = [] } = current;
    let result;
    let innerChild;

    if (kind === SEPARATOR) {
      result = accum.concat(
        <MainMenuSeparator key={ uuidv4() }/>
      );
      return result;
    }

    if (children.length) {
      innerChild = renderMenu(children);
    }

    result = accum.concat(
      <MainMenuNavItem
        id={ id }
        key={ uuidv4() }
        text={ text }
        context={ context }
        onClick={ onClick }
      >
        { innerChild }
      </MainMenuNavItem>
    );
    return result;
  }, []);

  return React.createElement('ul', props, kids);
};
