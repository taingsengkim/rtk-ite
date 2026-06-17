"use client";

import { useGetFakeStoreProductQuery } from "@/lib/features/productSlice/productSlice";
import Image from "next/image";

export default function FakeStoreProductDetailsComponent({
  id,
}: {
  id: string;
}) {
  const { data, isLoading, error } = useGetFakeStoreProductQuery(id);

  if (isLoading) {
    return <p className="p-6">Loading product...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">Failed to load product</p>;
  }

  if (!data) {
    return <p className="p-6">No product found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex justify-center items-center border rounded-lg p-6">
        <Image
          src={data.images?.[0]}
          alt={data.title}
          width={400}
          height={400}
          className="object-contain rounded-md"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <div className="text-xl font-semibold text-green-600">
          ${data.price}
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-medium">Category:</span> {data.category?.name}
          </p>

          <p>
            <span className="font-medium">Slug:</span> {data.slug}
          </p>
        </div>

        <div className="flex gap-2 mt-4">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            {data.category?.name}
          </span>

          {data.price > 100 && (
            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
              Premium
            </span>
          )}
        </div>
        <div className="flex gap-3 pt-4">
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Add to Cart
          </button>

          <button className="px-4 py-2 border rounded-md">Wishlist</button>
        </div>
      </div>
    </div>
  );
}
