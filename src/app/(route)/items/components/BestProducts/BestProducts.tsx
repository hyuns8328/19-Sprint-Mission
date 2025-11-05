"use client";

import ItemList from "../ItemList/ItemList";
import { useProducts } from "../../hooks/useProducts";

interface BestProductsProps {
  visibleItemCount: number;
}

const BestProducts = ({ visibleItemCount }: BestProductsProps) => {
  const { products, loading, error } = useProducts({
    orderBy: "favorite",
    pageSize: visibleItemCount,
  });

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <div className="mb-10 flex w-[343px] flex-col items-center md:w-[714px] lg:w-[1204px]">
      <h1 className="mb-4 w-full text-xl font-bold">베스트 상품</h1>
      <ItemList isBest={true} items={products} />
    </div>
  );
};

export default BestProducts;
