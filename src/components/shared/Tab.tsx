type TabProps = {
  label: string;
  isActive?: boolean;
};

export function Tab({ label, isActive = false }: TabProps) {
  return (
    <div
      className={`h-[47px] w-[202px] border-b-2 font-bold flex items-center justify-center ${
        isActive
          ? " border-[#EB7150] text-[#EB7150]"
          : "border-transparent text-white"
      }`}
    >
      {label}
    </div>
  );
}
