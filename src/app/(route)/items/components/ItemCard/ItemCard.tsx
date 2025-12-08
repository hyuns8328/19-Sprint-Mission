"use client";

import clsx from "clsx";

import IC_Heart from "@/components/icons/ic_heart.svg";

interface ItemCardProps {
  // id: number;
  name: string;
  price: number;
  favoriteCount: number;
  images: string;
  isBest: boolean;
}

const ItemCard = ({ images, name, price, favoriteCount, isBest }: ItemCardProps) => {
  const formattedPrice = price.toLocaleString();

  // === STYLES ===
  const baseStyle =
    "flex grid gap-2 md:gap-4 rounded-[12px] md:rounded-xl h-fit hover:cursor-pointer";
  const sizes = isBest
    ? "w-[343px] h-[434px] lg:w-[282px] lg:h-[378px]"
    : "w-42 h-[264px] md:w-[221px] md:h-[317px]";

  return (
    <div className={clsx(baseStyle, sizes)}>
      <div
        className={clsx(
          isBest ? "h-[343px] lg:h-[282px]" : "h-42 md:h-[221px]",
          "overflow-hidden rounded-2xl",
        )}
      >
        <img
          src={images ?? "/images/default_image.png"}
          alt={`${name} image`}
          className="h-full w-full object-cover"
          onError={(e) => {
            // 잘못된 이미지 url
            e.currentTarget.onerror = null; // 이미지 로드 실패 시 무한 루프 방지
            e.currentTarget.src = "/images/default_image.png";
          }}
        />
      </div>
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-gray800 line-clamp-1 font-semibold">{name}</h1>
        <span className="text-gray800 font-bold">{formattedPrice}원</span>
        <div className="flex items-center gap-1">
          <IC_Heart alt="like icon" width={16} height={16} />
          <span className="text-gray600">{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
