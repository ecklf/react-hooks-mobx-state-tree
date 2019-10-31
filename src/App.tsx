import React from "react";
import { Provider, rootStore } from "./models/Root";

import GitHubButton from "react-github-btn";

import Counter from "./components/Counter";
import Cart from "./components/Cart";

import logo from "./assets/mstlogo.png";

const App: React.FC = () => {
  return (
    <Provider value={rootStore}>
      <div className="w-screen h-screen flex flex-col items-center">
        <img src={logo} alt="mst logo" className="block max-w-md h-auto" />
        <div className="relative">
          <h1 className="font-bold text-3xl text-center">
            react-hooks-mobx-state-tree
          </h1>
          <div className="mt-3 absolute w-full flex justify-center">
            <GitHubButton
              href="https://github.com/impulse/react-hooks-mobx-state-tree"
              data-icon="octicon-star"
              data-size="large"
              data-show-count={true}
              aria-label="Star impulse/react-hooks-mobx-state-tree on GitHub"
            >
              Star
            </GitHubButton>
          </div>
        </div>
        <Counter />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
