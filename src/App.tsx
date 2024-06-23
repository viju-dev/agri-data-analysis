import React from 'react';
import MaxMinTable from './components/MaxMinTable';
import AverageTable from './components/AverageTable';
import './App.css';
import { useAgroData } from './hooks/useAgroData';

const App = () => {
  const { error } = useAgroData();

  return (
    <div className="App">
      <h1>Agricultural Data Analysis</h1>
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <>
          <MaxMinTable />
          <AverageTable />
        </>
      )}
    </div>
  );
};

export default App;
