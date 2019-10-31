import React from "react";

import { observer } from "mobx-react-lite";

import { Provider, rootStore, useMst } from "./models/Root";

export const Counter: React.FC = observer(() => {
  const store = useMst();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p>{store.counter.count}</p>
      <button className="mt-2" onClick={store.counter.increment}>
        Increment
      </button>

      <button className="mt-2" onClick={store.counter.decrement}>
        Decrement
      </button>
    </div>
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
