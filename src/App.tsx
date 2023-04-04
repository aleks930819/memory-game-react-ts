import React from 'react';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <CardGrid />
    </div>
  );
};

export default App;
