import { observer } from "mobx-react-lite";
import React from "react";
import { useMst } from "../models/Root";
import Button from "./Button";

const Counter = observer(() => {
  const { counter } = useMst();
  return (
    <div className="flex flex-col items-center mt-20">
      <p className="text-2xl font-bold text-center">Counter</p>
      <p
        style={{ fontVariant: "tabular-nums" }}
        className="text-2xl font-bold text-center"
      >
        {counter.count}
      </p>
      <div className="flex mt-2 space-x-3">
        <Button label="-" onClick={counter.decrement} />
        <Button label="+" onClick={counter.increment} />
      </div>
    </div>
  );
});

export default Counter;
