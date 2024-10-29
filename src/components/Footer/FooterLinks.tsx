import {
  footerCompanyLinks,
  footerRelatedLinks,
  footerTermsLinks,
} from "../../constants";

export function FooterLinks() {
  return (
    <div className="grid grid-cols-3 items-start justify-center gap-4 w-full">
      <div>
        <h1 className="text-[15.13px] font-bold">Company</h1>
        {footerCompanyLinks.map((link) => (
          <p className="text-sm font-light" key={link}>
            {link}
          </p>
        ))}
      </div>
      <div>
        <h1 className="text-[15.13px] font-bold">Terms</h1>
        {footerTermsLinks.map((link) => (
          <p className="text-sm font-light" key={link}>
            {link}
          </p>
        ))}
      </div>
      <div>
        <h1 className="text-[15.13px] font-bold">Related</h1>
        {footerRelatedLinks.map((link) => (
          <p className="text-sm font-light" key={link}>
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}
