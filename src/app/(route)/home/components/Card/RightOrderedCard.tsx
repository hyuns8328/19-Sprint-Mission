import Image from "next/image";

interface CardProps {
  tag: string;
  title: string;
  explanation: string;
  image: string;
}

const RightOrderedCard = ({ tag, title, explanation, image }: CardProps) => {
  return (
    <div className="flex h-[444px] w-[988px] items-center justify-center gap-16 rounded-xl bg-[#FCFCFC]">
      <div className="flex flex-col items-end gap-3">
        <span className="text-right text-lg font-semibold text-[#3692FF]">{tag}</span>
        <h1 className="text-right text-[40px] font-bold whitespace-pre-line">{title}</h1>
        <span className="text-right text-[24px] whitespace-pre-line">{explanation}</span>
      </div>
      <Image src={image} alt="" width={579} height={444} />
    </div>
  );
};

export default RightOrderedCard;
