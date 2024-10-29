import { Footer } from "../components/Footer/Footer";
import { GetVerifiedSection } from "../components/GetVerifiedSection/GetVerifiedSection";
import { Hero } from "../components/Hero/Hero";
import { HowItWorksSection } from "../components/HowItWorksSection/HowItWorksSection";
import { Navbar } from "../components/navbar/Navbar";
import { ReadyToDiveSection } from "../components/ReadyToDiveSection/ReadyToDiveSection";
import { RequirementsSection } from "../components/RequirementsSection/RequirementsSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ReadyToDiveSection />
      <RequirementsSection />
      <GetVerifiedSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}

export default HomePage;
