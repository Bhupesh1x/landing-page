type HowItWorkCardProps = {
  title: string;
  iconUrl: string;
  index: number;
};

export function HowItWorkCard({ title, iconUrl, index }: HowItWorkCardProps) {
  return (
    <div
      className={`h-[254px] flex flex-col items-center justify-center gap-8 ${
        index % 2 === 0 ? "bg-[#E8FBFF]" : "bg-white"
      }`}
    >
      <img src={iconUrl} alt="" />
      <p className="text-[14px] md:text-[20px] font-medium md:max-w-[300px] text-center px-2 md:px-0">
        {title}
      </p>
    </div>
  );
}
