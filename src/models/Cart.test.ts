import { CartItem, Cart } from "./Cart";
import { getSnapshot } from "mobx-state-tree";

it("can create an instance of a model", () => {
  const item = CartItem.create({
    name: "Google Pixel 3",
    price: 2.83
  });
  expect(item.name).toBe("Google Pixel 3");
  expect(item.price).toBe(2.83);
  expect(item.tags).toStrictEqual([]);

  item.changeName("Pixel 3");
  expect(item.name).toBe("Pixel 3");
  item.changePrice(3.83);
  expect(item.price).toBe(3.83);
});

it("should create a cart", () => {
  const cart = Cart.create({
    items: [
      {
        name: "First Item",
        price: 2.83,
        tags: [{ name: "first" }]
      }
    ]
  });
  expect(getSnapshot(cart)).toMatchSnapshot();
});

it("can add a new item to the cart", () => {
  const cart = Cart.create();
  expect(cart.items.length).toBe(0);

  cart.addCartItem({
    name: "New Item",
    price: 1
  });
  expect(getSnapshot(cart)).toMatchSnapshot();
});
