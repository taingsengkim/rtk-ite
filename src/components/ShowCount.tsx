"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";

export default function ShowCount() {
  const value = useAppSelector((value) => value.cart.totalQuantity);
  return (
    <div>
      <h1>ShowCount</h1>
      <span>{value}</span>
    </div>
  );
}
