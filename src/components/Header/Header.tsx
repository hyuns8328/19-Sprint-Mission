import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  currentPath: string;
}

const Header = ({ currentPath }: HeaderProps) => {
  // 메뉴 리스트를 한 곳에서 관리
  const menus = [
    { name: "자유게시판", href: "/boards" },
    { name: "중고마켓", href: "/items" },
  ];

  return (
    <div className="border-b border-[#DFDFDF]">
      <div className="mx-auto flex max-w-[1520px] items-center justify-between px-[24px] py-[10px]">
        <div className="flex items-center gap-8">
          <Link href="/">
            <picture>
              <source media="(max-width: 375px)" srcSet="/images/logo_mobile.png" />
              <Image src="/images/logo.png" alt="logo" width={153} height={51} />
            </picture>
          </Link>

          <nav className="flex gap-[30px]">
            {menus.map((menu) => {
              const isActive = currentPath.startsWith(menu.href);
              console.log("현재 경로:", currentPath);
              console.log("menu.href:", menu.href);
              return (
                <Link
                  key={menu.href}
                  href={menu.href}
                  className="transition-all duration-200 hover:font-semibold"
                  style={{
                    color: isActive ? "#3692FF" : "#555",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                >
                  {menu.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <Link href="/profile">
            <Image src="/images/ic_profile.png" alt="profile" width={40} height={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
