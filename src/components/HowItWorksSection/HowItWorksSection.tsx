import { howItWorksData } from "../../constants";
import { HowItWorkCard } from "./HowItWorkCard";

export function HowItWorksSection() {
  return (
    <div className="main-container pb-[8rem]">
      <h1 className="text-center text-[37.34px] font-bold">How it works?</h1>
      <p className="text-[17.16px] max-w-[900px] text-center mx-auto pt-3 pb-16 font-normal">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
        {howItWorksData.map((item, index) => (
          <HowItWorkCard
            key={item.title}
            title={item.title}
            iconUrl={item.iconUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
