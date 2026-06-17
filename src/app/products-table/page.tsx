"use client";
import ProductTableRender from "@/components/ProductTableRender";
import React from "react";

export default function ProductTable() {
  return (
    <div className="container mx-auto">
      <h1 className="py-5 font-bold underline">Product Table </h1>
      <ProductTableRender />
    </div>
  );
}
