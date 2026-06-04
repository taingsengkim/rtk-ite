"use client";

import {
  decrement,
  increment,
  resetValue,
} from "@/lib/features/counterSlice/countSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonComponent() {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5">
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(resetValue())}>reset</button>
    </div>
  );
}
