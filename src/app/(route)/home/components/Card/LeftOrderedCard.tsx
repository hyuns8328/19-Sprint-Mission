import Image from "next/image";

interface CardProps {
  tag: string;
  title: string;
  explanation: string;
  image: string;
}

const Card = ({ tag, title, explanation, image }: CardProps) => {
  return (
    <div className="flex h-[444px] w-[988px] items-center justify-center gap-16 rounded-xl bg-[#FCFCFC]">
      <Image src={image} alt="" width={579} height={444} />

      <div className="flex flex-col gap-3">
        <span className="text-lg font-semibold text-[#3692FF]">{tag}</span>
        <h1 className="text-[40px] font-bold whitespace-pre-line">{title}</h1>
        <span className="text-[24px] whitespace-pre-line">{explanation}</span>
      </div>
    </div>
  );
};

export default Card;
