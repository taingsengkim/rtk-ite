"use client";

import { Button } from "@/components/ui/button";
import { FakeStoreProductType } from "@/lib/features/productSlice/productSlice";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<FakeStoreProductType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId) as number;
      return cellValue.toString().includes(filterValue);
    },
  },
  {
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.original.images[0]}
        alt={row.original.title}
        width={60}
        height={60}
        className="rounded-md"
      />
    ),
    enableGlobalFilter: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "slug",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Slug
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "category",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.original.category?.name,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => row.getValue("price"),
    filterFn: (row, columnId, filterValue) => {
      const cellValue = row.getValue(columnId) as number;
      return cellValue.toString().includes(filterValue);
    },
  },

  //   {
  //     accessorKey: "details",
  //     header: ({ column }) => {
  //       return (
  //         <Link href={`/products-table/${column.id}`}>
  //           <Eye />
  //         </Link>
  //       );
  //     },
  //     cell: ({ row }) => `$${row.original.price}`,
  //   },
];
//   <Link href={`/products-table/${row.id}`}>
