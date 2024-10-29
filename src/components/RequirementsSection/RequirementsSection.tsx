import { requirementListData, youtubeUrl } from "../../constants";

import { Tab } from "../shared/Tab";

import { YouTubeEmbed } from "./YouTubeEmbed";
import { RequiremtListItem } from "./RequiremtListItem";

export function RequirementsSection() {
  return (
    <section className="main-container bg-[#072F57] md:h-[623px] flex items-center w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-14 md:w-[80%] md:mx-auto">
        <div className="w-full hidden lg:block">
          <YouTubeEmbed url={youtubeUrl} />
        </div>

        <div className="flex flex-col items-center justify-start lg:justify-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Tab label="Buyer" isActive />
            <Tab label="Supplier" />
          </div>
          <div className="pt-6">
            {requirementListData.map((requirement) => (
              <RequiremtListItem key={requirement} title={requirement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
