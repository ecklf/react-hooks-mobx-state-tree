import { Counter } from "./Counter";
import { getSnapshot, onPatch } from "mobx-state-tree";

it("should create a counter instance", () => {
  const item = Counter.create({
    count: 0
  });
  expect(getSnapshot(item)).toMatchSnapshot();
});

it("should increment and decrement", () => {
  const item = Counter.create({
    count: 0
  });
  const patches: any = [];

  onPatch(item, patch => {
    patches.push(patch);
  });

  item.increment();
  item.decrement();
  expect(patches).toMatchSnapshot();
});
