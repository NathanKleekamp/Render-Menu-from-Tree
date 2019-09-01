import React from 'react';
import { MainMenu } from './components';

import './App.css';

function App() {
  return (
    <div className="o-App">
      <MainMenu />
      <div className="o-ContentWrapper">
        <div className="c-Sidebar"></div>
        <div className="c-Content"></div>
      </div>
    </div>
  );
}

export default App;
