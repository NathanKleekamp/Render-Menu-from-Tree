import React, { useState } from 'react';
import uuidv4 from 'uuid';

import './MainMenu.css';

const DEFAULT_CLASS_NAME = 'c-MainMenu_NavItem';

function NavItemText({ text }) {
  return (
    <span className="c-MainMenu_NavItemText">{text}</span>
  );
}

function NavItemContext({ context }) {
  return (
    <span className="c-MainMenu_NavItemContext">{context}</span>
  );
}

function MainMenuNavItem({ id, text, context, onClick, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const kids = [<NavItemText text={ text } key={ uuidv4() } />];
  const props = {
    className: DEFAULT_CLASS_NAME,
    id,
  };

  if (context) {
    kids.push(<NavItemContext context={ context } key={ uuidv4() }/>);
  }

  if (children) {
    kids.push(children);
  }

  if (onClick) {
    Object.assign(props, {
      onClick: (event) => {
        onClick( event, { isVisible, setIsVisible });
      },
      className: isVisible ? `${DEFAULT_CLASS_NAME} is-Visible` : DEFAULT_CLASS_NAME,
    });
  }

  return React.createElement('li', props, kids);
}

export default MainMenuNavItem;
