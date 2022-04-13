import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import Container from './components/Container';
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot override={false}>
      <Container/>
    </RecoilRoot>
  );
}

export default App;
