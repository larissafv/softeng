import { useState } from 'react';

import Sidebar from './dashboard/sidebar/Sidebar';
import Main from './dashboard/main/Main';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
