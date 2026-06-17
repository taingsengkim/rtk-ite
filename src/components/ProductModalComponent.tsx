"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { useGetFakeStoreProductQuery } from "@/lib/features/productSlice/productSlice";

export default function ProductModalComponent({ id }: { id: string }) {
  const router = useRouter();
  const { data, isLoading } = useGetFakeStoreProductQuery(id);
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {isLoading ? "Loading product..." : data?.title}
          </DialogTitle>
        </DialogHeader>

        {isLoading && (
          <div className="space-y-4 animate-pulse">
            <div className="h-60 bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex justify-center items-center border rounded-xl p-4 bg-white">
              <Image
                src={data.images?.[0]}
                alt={data.title}
                width={400}
                height={400}
                className="object-contain rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div className="text-2xl font-bold text-green-600">
                ${data.price}
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                  {data.category?.name}
                </span>

                <span className="px-3 py-1 text-sm bg-black text-white rounded-full">
                  {data.slug}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                This is a high-quality product from our store. It is designed to
                give the best performance and value for money.
              </p>
              <div className="flex gap-3 pt-4">
                <button className="px-4 py-2 bg-black text-white rounded-md w-full">
                  Add to Cart
                </button>

                <button className="px-4 py-2 border rounded-md w-full">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
