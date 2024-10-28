import { Button } from "../shared/Button";

export function GetVerifiedSection() {
  return (
    <section className="my-20 bg-[#E8FBFF] py-20 h-[254px] box-border">
      <div className="main-container">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[37.34px] font-semibold border-b-4 border-transparent">
            Let Suppliers{" "}
            <span className="border-b-4 !border-[#EB7150]">Find You</span>
          </p>
          <Button variant="secondary">Get Verified</Button>
        </div>
      </div>
    </section>
  );
}
