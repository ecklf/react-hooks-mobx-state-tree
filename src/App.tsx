import React from "react";

import { observer } from "mobx-react-lite";

import { Provider, rootStore, useMst } from "./models/Root";

import logo from "./logo.svg";
import "./App.css";

export const Counter: React.FC = observer(() => {
  const store = useMst();
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{store.counter.count}</p>
      <button onClick={store.counter.increment}>Increment</button>
      <button onClick={store.counter.decrement}>Decrement</button>
    </header>
  );
});

const App: React.FC = () => {
  if (!rootStore) return null;
  return (
    <Provider value={rootStore}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
