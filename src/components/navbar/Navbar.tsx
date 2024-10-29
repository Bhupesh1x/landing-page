import { Button } from "../shared/Button";

export function Navbar() {
  return (
    <header className="h-[86px] header-shadow">
      <div className="main-container h-full w-full flex items-center justify-between">
        {/* Logo */}
        <img src="/images/logo.png" alt="" />

        {/* Main Navigation */}
        <nav className="flex items-center gap-8">
          <p className="text-[#6D6E71] text-[15.25px] font-normal leading-6 hidden lg:block">
            Find Suppliers
          </p>
          <div className="items-center gap-1 hidden lg:flex">
            <p className="text-[#6D6E71] text-[15.25px] font-normal leading-6">
              Find Service Tags
            </p>
            <img src="/icons/arrow-down-icon.svg" alt="" />
          </div>
          <Button variant="outline" className="hidden sm:block min-w-[193px]">
            Login / Sign Up
          </Button>
        </nav>
      </div>
    </header>
  );
}
