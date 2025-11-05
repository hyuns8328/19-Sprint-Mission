"use client";

import ItemCard from "../ItemCard/ItemCard";
import { Product } from "@/types/product";

interface ItemListProps {
  items: Product[];
  isBest?: boolean;
}

const ItemList = ({ items, isBest = false }: ItemListProps) => {
  return (
    <ul className="flex w-full flex-wrap gap-2 md:gap-4">
      {items.map((item) => (
        <li key={item.id}>
          <ItemCard
            images={item.images}
            name={item.name}
            price={item.price}
            favoriteCount={item.favoriteCount}
            isBest={isBest}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
