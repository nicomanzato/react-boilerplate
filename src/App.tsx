import React from 'react';
import './App.scss';

import Header from 'components/header/header';
import { Footer } from 'components/footer/footer';
import Router from 'Router';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
