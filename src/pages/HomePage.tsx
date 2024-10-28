import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/navbar/Navbar";
import { ReadyToDiveSection } from "../components/ReadyToDiveSection/ReadyToDiveSection";
import { RequirementsSection } from "../components/RequirementsSection/RequirementsSection";

function HomePage() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <ReadyToDiveSection />
      <RequirementsSection />
    </div>
  );
}

export default HomePage;
