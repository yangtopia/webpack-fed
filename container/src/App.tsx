import React from 'react';
import logo from './logo.svg';
import './App.css';

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

console.log(App1, App2);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Host
        </a>
      </header>
      <React.Suspense fallback={<div>'...App1 loading'</div>}>
        <App1 />
      </React.Suspense>
      {/*<React.Suspense fallback={<div>'...App2 loading'</div>}>*/}
      {/*    <App2/>*/}
      {/*</React.Suspense>*/}
    </div>
  );
}

export default App;
