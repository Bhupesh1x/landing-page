import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/navbar/Navbar";
import { ReadyToDiveSection } from "../components/ReadyToDiveSection/ReadyToDiveSection";

function HomePage() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <ReadyToDiveSection />
    </div>
  );
}

export default HomePage;
