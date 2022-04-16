import React from 'react';
import './App.scss';

import {useStore} from 'shared-zustand';

function App() {
  const bears = useStore(state => state.bears);

  const increase = useStore(state => state.increasePopulation);

  return (
    <>
      <div>App3 - Zustand</div>
      <div>bears: {bears}</div>
      <button style={{ width: '100px' }} onClick={increase}>INCREASE</button>
    </>
  );
}

export default App;
