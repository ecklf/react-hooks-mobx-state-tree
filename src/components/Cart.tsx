import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { useMst } from "../models/Root";
import Button from "./Button";

const Cart = observer(() => {
  const { cart } = useMst();

  const [name, setName] = useState("The Hobbit");
  const [price, setPrice] = useState(20);

  const isDisabled = () => {
    return name === "" || price === 0;
  };

  return (
    <div className="w-64 mx-auto mt-16">
      <p className="text-2xl font-bold text-center">Item Cart</p>
      <label className="block">
        <span className="text-gray-200">Name</span>
        <input
          type="text"
          className="block w-full mt-1 bg-gray-900 focus:ring-orange-500 focus:border-orange-500"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e && e.target) {
              setName(e.target.value);
            }
          }}
        />
      </label>
      <label className="block mt-2">
        <span className="text-gray-200">Price</span>
        <input
          type="number"
          className="block w-full mt-1 bg-gray-900 focus:ring-orange-500 focus:border-orange-500"
          min="0.0"
          step="any"
          value={price}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e && e.target) {
              setPrice(Number(e.target.value));
            }
          }}
        />
      </label>
      <div className="flex items-center mt-4">
        <div className="flex flex-col flex-grow space-y-2">
          <span
            style={{ fontVariant: "tabular-nums" }}
            className="text-lg font-bold leading-tight"
          >
            Items: {cart.totalItems}
          </span>
          <span
            style={{ fontVariant: "tabular-nums" }}
            className="flex-grow text-lg font-bold leading-tight"
          >
            Total: {cart.totalPrice}
          </span>
        </div>
        <Button
          disabled={isDisabled()}
          label="Add"
          onClick={() => {
            cart.addCartItem({
              name,
              price,
            });
          }}
        />
      </div>
      <div className="h-64 px-3 py-3 my-12 space-y-3 overflow-y-scroll border border-gray-500">
        {cart.items.map((item, index) => {
          return (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center px-4 py-2 mr-2 font-medium leading-tight bg-gray-600 text-gray-50"
            >
              <div className="flex-grow">{item.name}</div>
              <div>{item.price}</div>
              <span
                className="ml-5 cursor-pointer select-none"
                onClick={item.remove}
                role="img"
                aria-label="delete"
              >
                ❌
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Cart;
