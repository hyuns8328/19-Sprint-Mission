"use client";

import { useState } from "react";

import Button from "@/components/Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import ItemList from "../ItemList/ItemList";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Pagination/Pagination";
import Link from "next/link";

import { useProducts } from "../../hooks/useProducts";

interface AllProductsProps {
  visibleItemCount: number;
  windowWidth: number;
}

const AllProducts = ({ visibleItemCount, windowWidth }: AllProductsProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<"recent" | "favorite">("recent");

  const { products, totalCount, loading, error } = useProducts({
    page: currentPage,
    orderBy: sort,
    pageSize: visibleItemCount,
  });

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <div>
      <div className="flex w-[344px] flex-col items-center md:w-[714px] lg:w-[1204px]">
        {/*  */}
        {windowWidth >= 768 && (
          <div className="mb-4 flex w-full justify-between">
            <h1 className="text-[20px] font-bold">전체 상품</h1>
            <div className="flex gap-3">
              <SearchInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSubmit={(e) => console.log(e)}
              />
              <Link href="/additem">
                <Button>상품 등록하기</Button>
              </Link>
              <Dropdown
                defaultSelected={{ label: "최신순", value: "recent" }}
                options={[
                  { label: "최신순", value: "recent" },
                  { label: "좋아요순", value: "favorite" },
                ]}
                onSelect={(opt) => setSort(opt.value as "recent" | "favorite")}
              />
            </div>
          </div>
        )}

        {windowWidth < 768 && (
          <div className="mb-4 flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-[20px] font-bold">전체 상품</h1>
              <Button>상품 등록하기</Button>
            </div>
            <div className="flex w-full items-center justify-between">
              <SearchInput
                value={searchValue}
                size="md"
                onChange={(e) => setSearchValue(e.target.value)}
                onSubmit={(e) => console.log(e)}
              />
              <Dropdown
                defaultSelected={{ label: "최신순", value: "recent" }}
                options={[
                  { label: "최신순", value: "recent" },
                  { label: "좋아요순", value: "favorite" },
                ]}
                onlyIcon={true}
              />
            </div>
          </div>
        )}
        {loading && <span>ㅋㅋ</span>}
        {!loading && <ItemList items={products} isBest={false} />}
      </div>
      <div className="mt-11 flex justify-center">
        <Pagination
          totalCount={totalCount}
          currentPage={currentPage}
          setPage={setCurrentPage}
          visibleItemCount={visibleItemCount}
        />
      </div>
    </div>
  );
};

export default AllProducts;
