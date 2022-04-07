import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.scss';
import Container from './components/Container';

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

function App() {
  return (
    <div>
      <RecoilRoot>
        <Container />
      </RecoilRoot>
      <React.Suspense fallback={<div>'...App1 loading'</div>}>
        <App1 />
      </React.Suspense>
      <React.Suspense fallback={<div>'...App2 loading'</div>}>
        <App2 />
      </React.Suspense>
    </div>
  );
}

export default App;
