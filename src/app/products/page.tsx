import { CardComponent } from "@/components/CardProductComponent";
import { addToCart, CartItem } from "@/lib/features/cartSlice/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function ProductPage() {
  const items: CartItem[] = [
    {
      id: 1,
      name: "iPhone 15",
      image:
        "https://khmersamnang.com/wp-content/uploads/2024/06/15plus-pink.png",
      price: 999,
      quantity: 10,
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT345KMEfPhNU0IGt-U9KGS8ha4ZJSo-E6ixg&s",
      price: 899,
      quantity: 10,
    },
    {
      id: 3,
      name: "MacBook Air M4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjDBh58fituhE2r-tX5NUMDCZaCxDqF9uiA&s",
      price: 1299,
      quantity: 10,
    },
    {
      id: 4,
      name: "ROG Ally X",
      image:
        "https://dlcdnwebimgs.asus.com/files/media/C03ED571-0D4B-47B3-90B0-BEF72BB26C05/v2/images/large/1x/nr2501_multi_games.png",
      price: 799,
      quantity: 10,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item.id}>
          <CardComponent props={item} />
        </div>
      ))}
    </div>
  );
}
