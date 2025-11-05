"use client";

import { getProductsList } from "@/apis/products";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";

interface UseProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "favorite";
  search?: string;
}

interface UseProductResult {
  products: Product[];
  totalCount: number;
  loading: boolean;
  error: Error | null;
}

export const useProducts = ({
  page,
  pageSize,
  orderBy,
  search,
}: UseProductsParams): UseProductResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // fetchProducts() : 상품 불러오기
  const fetchProducts = async () => {
    setError(null);
    try {
      const res = await getProductsList({
        page,
        pageSize,
        orderBy,
        search,
      });

      // 데이터 매핑
      const list = (res.list ?? []).map(
        (p: Product): Product => ({
          id: p.id,
          name: p.name,
          price: p.price,
          favoriteCount: p.favoriteCount,
          images: p.images?.[0],
        }),
      );

      setProducts(list ?? []);
      setTotalCount(res.totalCount ?? 0);
    } catch (err) {
      if (err instanceof Error) setError(err);
      else setError(new Error("Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  // initialParams의 각 값이 변경될 때마다 fetch
  useEffect(() => {
    fetchProducts();
  }, [page, pageSize, orderBy, search]);

  return { products, totalCount, loading, error };
};
