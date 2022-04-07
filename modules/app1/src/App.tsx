import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { RecoilRoot } from 'recoil';
import Container from './components/Container';

function App() {
  return (
    <RecoilRoot>
      <Container />
    </RecoilRoot>
  );
}

export default App;
