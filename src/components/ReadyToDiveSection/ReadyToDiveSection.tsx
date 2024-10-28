import { readyToDiveLocationData } from "../../constants";

import { Button } from "../shared/Button";
import { LocationCard } from "./LocationCard";

export function ReadyToDiveSection() {
  return (
    <section className="py-20 main-container">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[7rem]">
        {/* Left Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-[37.34px] font-bold leading-10">
            Ready to dive into HABOT?
          </h1>
          <p className="text-black font-light">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className="w-[317px] flex items-center justify-between">
              <p />
              Sign up Today !
              <img src="/icons/arrow-left-icon.svg" alt="" />
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            {readyToDiveLocationData.map((location) => (
              <LocationCard key={location} location={location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
