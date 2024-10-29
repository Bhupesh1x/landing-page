type LocationCardProps = {
  location: string;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="w-[170px] md:w-[260px] h-[55px]  md:h-[65px] border border-[#E7760D] rounded-[5px] flex items-center justify-center">
      <h1 className="text-[#3E3E3E] text-[18.75px] font-medium">{location}</h1>
    </div>
  );
}
