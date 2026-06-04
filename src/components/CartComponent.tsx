import { useAppSelector } from "@/lib/hooks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function CartComponent() {
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <Link href={"/cart"}>
      <div className="relative inline-flexr">
        <ShoppingCart className="h-7 w-7 text-gray-700 " />

        {totalQuantity > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {totalQuantity}
          </span>
        )}
      </div>
    </Link>
  );
}
