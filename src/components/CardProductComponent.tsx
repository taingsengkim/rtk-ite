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
import Image from "next/image";
import { useDispatch } from "react-redux";

export function CardComponent({ props }: { props: CartItem }) {
  const dispatch = useDispatch();

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        width={1550}
        height={1550}
        src={props?.image}
        alt="Event cover"
        className="relative z-20 h-100 w-full object-contain "
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${props.price}</Badge>
        </CardAction>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={() => dispatch(addToCart(props))}
          className="cursor-pointer"
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
