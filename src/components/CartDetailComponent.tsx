"use client";

import { Button } from "@/components/ui/button";
import { addToCart, removeFromCart } from "@/lib/features/cartSlice/cartSlice";
import { useAppSelector } from "@/lib/hooks";
import React from "react";
import { useDispatch } from "react-redux";

export default function CartDetailComponent() {
  const { items, totalQuantity, totalAmount } = useAppSelector(
    (state) => state.cart,
  );

  const dispatch = useDispatch();
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <p className="text-lg">
          Total Items: <span className="font-semibold">{totalQuantity}</span>
        </p>

        <p className="text-lg">
          Total Amount:{" "}
          <span className="font-semibold">${totalAmount.toFixed(2)}</span>
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Your cart is empty
        </div>
      ) : (
        <div className="space-y-4">
          {items.map(
            (item) =>
              item.quantity > 0 && (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white shadow rounded-lg p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <Button
                    className="cursor-pointer"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add x1
                  </Button>
                  <Button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="bg-red-500 cursor-pointer"
                  >
                    Remove x1
                  </Button>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
}
