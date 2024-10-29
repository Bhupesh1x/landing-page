import { Button } from "../shared/Button";

export function Hero() {
  return (
    <section className="relative">
      <img
        src="/images/hero-bg.png"
        alt=""
        className="w-full h-[500px] md:h-[609px] object-cover object-center z-10"
      />

      <div className="absolute top-0 left-0 z-20 text-white flex flex-col items-center justify-center h-full w-full text-center">
        <h1 className="text-[30px] lg:text-[55px] font-bold">
          Are You a Supplier?
        </h1>
        <h2 className="text-[30px] lg:text-[55px] font-bold">
          Explore Matching Opportunities.
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-3 py-6">
          {/* Required service Search Input */}
          <div className="h-[56px] bg-white rounded-[5px] border border-[#D1D5DB] flex items-center gap-3 px-4 md:w-[400px]">
            <img src="/icons/suitcase-icon.svg" alt="" />
            <input
              placeholder="Search your required service here"
              className="bg-transparent outline-none text-[#6B7280] flex-1"
            />
          </div>

          {/* Location Search Input */}
          <div className="h-[56px] bg-white rounded-[5px] border border-[#D1D5DB] flex items-center gap-3 px-4 md:w-[400px]">
            <img src="/icons/location-icon.svg" alt="" />
            <input
              placeholder="Search your desired location here"
              className="bg-transparent outline-none text-[#6B7280] flex-1"
            />
          </div>

          <Button className="!w-full md:!w-fit">Search</Button>
        </div>

        <p className="text-lg font-bold text-center">
          Are you a buyer?
          <span className="font-normal underline cursor-pointer pl-1 lg:pl-3">
            Click here if you are looking to post a requirements
          </span>
        </p>
      </div>
    </section>
  );
}
