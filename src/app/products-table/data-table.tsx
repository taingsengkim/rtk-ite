"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
interface GlobalFilter {
  globalFilter: any;
}
interface BaseTableData {
  id: string | number;
}
export function DataTable<TData extends BaseTableData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState<any>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const router = useRouter();
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [filterColumn, setFilterColumn] = useState("all");
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,

    state: {
      globalFilter,
      sorting,
      pagination,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
  });
  const handleFilterColumnChange = (newColumn: string) => {
    if (filterColumn === "all") {
      setGlobalFilter("");
      table.setGlobalFilter("");
    } else {
      table.getColumn(filterColumn)?.setFilterValue(undefined);
    }
    setFilterColumn(newColumn);
  };
  return (
    <div className="overflow-hidden rounded-md border">
      <div className="flex gap-2 p-4">
        <select
          value={filterColumn}
          onChange={(e) => handleFilterColumnChange(e.target.value)}
          className="border px-2 py-1 rounded-4xl"
        >
          <option value="all">All</option>
          <option value="id">Id</option>
          <option value="title">Title</option>
          <option value="slug">Slug</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
        </select>

        <Input
          placeholder={
            filterColumn === "all"
              ? "Search all..."
              : `Search ${filterColumn}...`
          }
          value={
            filterColumn === "all"
              ? (globalFilter ?? "")
              : ((table.getColumn(filterColumn)?.getFilterValue() as string) ??
                "")
          }
          onChange={(e) => {
            const value = e.target.value;
            if (filterColumn === "all") {
              setGlobalFilter(value);
              table.setGlobalFilter(value);
            } else {
              table.getColumn(filterColumn)?.setFilterValue(value);
            }
          }}
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() =>
                  router.push(`/products-table/${row.original.id}`)
                }
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2 py-4">
          {Array.from({ length: table.getPageCount() }).map((_, i) => (
            <Button
              key={i}
              variant={
                table.getState().pagination.pageIndex === i
                  ? "default"
                  : "outline"
              }
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
