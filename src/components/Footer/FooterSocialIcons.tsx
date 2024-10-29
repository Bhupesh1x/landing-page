import { footerSocialIcons } from "../../constants";

export function FooterSocialIcons() {
  return (
    <div className="flex items-center justify-center md:justify-end gap-4">
      {footerSocialIcons.map((icon) => (
        <div
          key={icon.iconTitle}
          className="border border-[#ffffff33] rounded-[20px] h-[40px] w-[40px] flex items-center justify-center"
        >
          <img src={icon.iconUrl} alt={icon.iconTitle} />
        </div>
      ))}
    </div>
  );
}
