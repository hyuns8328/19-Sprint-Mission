import Button from "@/components/Button/Button";

import IC_ArrowLeft from "@/components/icons/arrow_left.svg";
import IC_ArrowRight from "@/components/icons/arrow_right.svg";

const PAGE_BLOCK = 5; // 보여지는 버튼 개수

interface PaginationProps {
  totalCount: number; // 총 데이터 개수
  currentPage: number; // 현재 페이지
  setPage: React.Dispatch<React.SetStateAction<number>>; // 페이지 상태 업데이트
  visibleItemCount: number; // 한 페이지당 데이터 수
}

const Pagination = ({ totalCount, currentPage, setPage, visibleItemCount }: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / visibleItemCount);
  if (totalPages <= 1) return null;

  const buttons = Array.from({ length: PAGE_BLOCK }, (_, i) => i);

  const currentBlock = Math.floor((currentPage - 1) / PAGE_BLOCK);
  const startPage = currentBlock * PAGE_BLOCK + 1;

  const handlePageChange = (num: number) => {
    if (num < 1 || num > totalPages) return;
    setPage(num);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {/* 이전 버튼 */}
      <Button
        variant="outlined"
        radius="full"
        size="sm"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <IC_ArrowLeft />
      </Button>
      {buttons.map((_, num) => {
        const pageNum = startPage + num;
        if (pageNum > totalPages) return null;

        return (
          <Button
            key={num}
            variant={pageNum === currentPage ? "primary" : "outlined"}
            size="sm"
            radius="full"
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </Button>
        );
      })}

      <Button
        variant="outlined"
        size="sm"
        radius="full"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <IC_ArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
