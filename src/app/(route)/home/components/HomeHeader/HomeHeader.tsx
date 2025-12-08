import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="mx-auto flex max-w-[1520px] items-center justify-between border-b border-[#DFDFDF] px-[24px] py-[10px]">
      <div className="flex items-center gap-8">
        <Link href="/">
          <picture>
            <source media="(max-width: 375px)" srcSet="/images/logo_mobile.png" />
            <Image src="/images/logo.png" alt="logo" width={153} height={51} />
          </picture>
        </Link>
      </div>
      <div>
        <Link href="/items">
          <Button size="lg" onClick={() => console.log("page")}>
            로그인
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
