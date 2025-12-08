"use client";
import { useCallback, useState, useEffect, useRef } from "react";
// useCallback : 컴포넌트가 리렌더링될 때마다 새로 만들어지는 함수를 기억하여(메모이제이션) 재생성을 방지함
//               useCallback은 "함수 전용"으로, 값(숫자, 문자열, 객체)은 useMemo를 사용함
//               - 자식 컴포넌트에 함수를 props로 넘길 때
//               - useEffect의 의존성에 함수가 포함될 때
//               - 이벤트 핸들러를 안정적으로 유지하고 싶을 때 (클릭, 토글, 닫기 등 자주 쓰이는 함수)
// useRef : 특정 DOM 요소/값을 직접 참조하는 훅 (HTML의 document.querySelector()와 비슷)
// useEffect : 컴포넌트가 렌더링된 후 실행되어야 하는 side effect를 처리
import IC_Sort from "@/components/icons/ic_sort.svg";
import IC_ArrowDown from "@/components/icons/ic_arrow_down.svg";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  defaultSelected: DropdownOption;
  options: DropdownOption[];
  onlyIcon?: boolean;
  onSelect?: (option: DropdownOption) => void;
}

const Dropdown = ({ defaultSelected, options = [], onlyIcon = false, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption>(defaultSelected);
  const dropdownRef = useRef<HTMLDivElement>(null); // Dropdown 요소를 참조하여 외부와 판별

  // useCallback : toggle, close
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  // 브라우저 전역 이벤트로, 드롭다운 렌더링 이후에 등록되어야 해서 useEffect 내부에서 실행
  useEffect(() => {
    // 외부 클릭 처리
    const onPointerDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    // ESC 키로 포커스 해제
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown); // 브라우저에 특정 이벤트가 발생했을 때 실행할 함수 등록
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown); // 등록했던 이벤트 해제  (메모리 누수 및 중복 호출 방지)
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option); // 선택 상태 업데트
    onSelect?.(option);
    close();
  };

  return (
    <div className="flex" ref={dropdownRef}>
      <div className="relative">
        <button
          className="border-gray200 flex h-[42px] w-[42px] cursor-pointer items-center justify-center gap-5 rounded-xl border md:w-[130px]"
          onClick={() => toggleMenu()}
        >
          {!onlyIcon && (
            <>
              {selected.label}
              <IC_ArrowDown />
            </>
          )}
          {onlyIcon && <IC_Sort />}
        </button>
        {isOpen && (
          <ul className="border-gray200 divide-gray200 absolute top-0 right-0 mt-12 divide-y overflow-hidden rounded-xl border bg-white shadow-md">
            {options.map((option) => (
              <li
                key={option.value}
                className="hover:bg-gray100 flex h-[42px] w-[130px] cursor-pointer items-center justify-center"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
