"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import HomeHeader from "./(route)/home/components/HomeHeader/HomeHeader";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome ? <HomeHeader /> : <Header currentPath={pathname} />}
      {children}
    </>
  );
};

export default ClientLayout;
