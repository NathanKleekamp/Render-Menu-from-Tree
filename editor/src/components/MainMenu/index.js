import React from 'react';
import { renderMenu } from './utilities';
import { mainMenuData } from './data';

function MainMenu() {
  return (
    <div className="c-MainMenu">
      <nav>{ renderMenu(mainMenuData) }</nav>
    </div>
  );
}

export default MainMenu;
