"use client";

import Image from "next/image";
import IC_Facebook from "@/components/icons/ic_facebook.svg";
import IC_Twitter from "@/components/icons/ic_twitter.svg";
import IC_Youtube from "@/components/icons/ic_youtube.svg";
import IC_Instagram from "@/components/icons/ic_instagram.svg";

import Button from "@/components/Button/Button";
import Link from "next/link";
import LeftOrderedCard from "./components/Card/LeftOrderedCard";
import RightOrderedCard from "./components/Card/RightOrderedCard";

const HomePage = () => {
  return (
    <div>
      <div className="flex items-end justify-center bg-[#CFE5FF] pt-20">
        <div className="flex items-center">
          <div className="flex w-full flex-col gap-8">
            <h1 className="text-[40px] font-semibold text-[#374151]">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <Link href="/items">
              <Button size="full" radius="full" onClick={() => console.log("page")}>
                구경하러 가기
              </Button>
            </Link>
          </div>
          <Image src="/images/Img_home_top.png" alt="" width={746} height={340} />
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-[1200px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-center py-[138px]">
            <LeftOrderedCard
              tag="Hot item"
              title={`인기 상품을\n확인해보세요`}
              explanation={`가장 HOT한 중고거래 물품을\n판다 마켓에서 확인해 보세요.`}
              image="/images/intro-hot-item.png"
            />
          </div>
          <div className="flex items-center justify-center py-[138px]">
            <RightOrderedCard
              tag="Search"
              title={`구매를 원하는\n상품을 검색하세요`}
              explanation={`구하고 싶은 물품은 검색해서\n쉽게 찾아보세요`}
              image="/images/intro-search.png"
            />
          </div>
          <div className="flex items-center justify-center py-[138px]">
            <LeftOrderedCard
              tag="Register"
              title={`판매를 원하는\n상품을 등록하세요`}
              explanation={`어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요`}
              image="/images/intro-register.png"
            />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center bg-[#CFE5FF] pt-[143px] text-[#374151]">
        <div className="flex items-center">
          <span className="text-[40px] font-semibold">
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </span>
          <Image src="/images/Img_home_bottom.png" alt="" width={746} height={397} />
        </div>
      </div>
      <div className="flex justify-center bg-[#111827] text-[#E5E7EB]">
        <div className="flex h-40 w-[1120px] justify-between pt-8">
          <div>
            <span>©codeit - 2024</span>
          </div>
          <div className="flex gap-[30px]">
            <span>Privacy Policy</span>
            <span>FAQ</span>
          </div>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/">
              <IC_Facebook />
            </Link>
            <Link href="https://x.com/">
              <IC_Twitter />
            </Link>
            <Link href="https://www.youtube.com/?themeRefresh=1">
              <IC_Youtube />
            </Link>
            <Link href="https://www.instagram.com/">
              <IC_Instagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
