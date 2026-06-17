"use client";
import { useGetAllProductQuery } from "@/services/ecommerce";
import { CardComponent } from "./CardProductComponent";
import { CardComponent2 } from "./CardProductComponent2";

export default function ProductRender() {
  const { data, error, isLoading } = useGetAllProductQuery();
  console.log("Data", data);
  return (
    <div className="grid grid-cols-4 gap-5">
      {data?.content?.map((d, _) => (
        <CardComponent2 props={d} key={_} />
      ))}
    </div>
  );
}
