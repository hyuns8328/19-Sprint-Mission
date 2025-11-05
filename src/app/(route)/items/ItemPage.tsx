"use client";

import { useState, useEffect } from "react";

import BestProducts from "./components/BestProducts/BestProducts";
import AllProducts from "./components/AllProducts/AllProducts";

const ItemPage = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [allItemCount, setAlltemCount] = useState(10);
  const [bestItemCount, setBestItemCount] = useState(4);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth === null) return;
    if (windowWidth > 1024) {
      setBestItemCount(4);
      setAlltemCount(10);
    } else if (windowWidth >= 768) {
      setBestItemCount(2);
      setAlltemCount(6);
    } else {
      setBestItemCount(1);
      setAlltemCount(4);
    }
  }, [windowWidth]);

  return (
    <div>
      <div className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center px-4 md:px-6">
        {windowWidth !== null && (
          <>
            <BestProducts visibleItemCount={bestItemCount} />
            <AllProducts visibleItemCount={allItemCount} windowWidth={windowWidth} />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
