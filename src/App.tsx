import React, { FC, ReactElement } from 'react';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';

const App: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <Header />
      <CardGrid />
    </div>
  );
};

export default App;
