import { FooterInfo } from "./FooterInfo";
import { FooterLinks } from "./FooterLinks";
import { FooterSocialIcons } from "./FooterSocialIcons";

export function Footer() {
  return (
    <footer className="bg-[#123557] text-white">
      <div className="main-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-[#6D6E71] py-8 w-full text-center md:text-left px-0 md:px-4">
          <FooterInfo />

          <FooterLinks />

          <FooterSocialIcons />
        </div>
      </div>
    </footer>
  );
}
