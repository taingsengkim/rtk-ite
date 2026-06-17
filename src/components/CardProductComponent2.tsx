"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { addToCart, CartItem } from "@/lib/features/cartSlice/cartSlice";
import { ProductType } from "@/lib/products";
import Image from "next/image";
import { useDispatch } from "react-redux";

export function CardComponent2({ props }: { props: ProductType }) {
  const dispatch = useDispatch();

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        width={1550}
        height={1550}
        src={props?.thumbnail}
        alt="Event cover"
        className="relative z-20 h-100 w-full object-contain "
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${props.priceOut}</Badge>
        </CardAction>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      {/* <CardFooter>
        <Button
          // onClick={() => dispatch(addToCart(props))}
          className="cursor-pointer"
        >
          Add To Cart
        </Button>
      </CardFooter> */}
    </Card>
  );
}
