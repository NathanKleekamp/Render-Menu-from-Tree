import React, { useState } from 'react';
import uuidv4 from 'uuid';

import './MainMenu.css';

const DEFAULT_CLASS_NAME = 'c-MainMenu_NavItem';

function MainMenuNavItem({ id, text, context, onClick, children }) {
  const [isVisible, setIsVisible] = useState(false);

  const textSpan = <span className="c-MainMenu_NavItemText" key={ uuidv4() }>{text}</span>
  const contextSpan = <span className="c-MainMenu_NavItemContext" key={ uuidv4() }>{context}</span>

  let kids = [textSpan];
  let props = {
    className: 'c-MainMenu_NavItem',
    id,
  };

  if (context) {
    kids = kids.concat(contextSpan);
  }

  if (children) {
    kids = kids.concat(children);
  }

  if (onClick) {
    props = Object.assign({}, props, {
      onClick: (event) => {
        onClick( event, { isVisible, setIsVisible });
      },
      className: isVisible ? `${DEFAULT_CLASS_NAME} is-Visible` : DEFAULT_CLASS_NAME,
    });
  }

  return React.createElement('li', props, kids);
}

export default MainMenuNavItem;
