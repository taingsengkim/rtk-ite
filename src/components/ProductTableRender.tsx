import { useGetAllFakeStoreProductQuery } from "@/lib/features/productSlice/productSlice";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import { DataTable } from "@/app/products-table/data-table";
import { columns } from "@/app/products-table/columns";

export default function ProductTableRender() {
  const { data, error, isLoading } = useGetAllFakeStoreProductQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading products</p>;
  }
  console.log("FAKESTORE DATA :", data);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}
