import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/navbar/Navbar";

function HomePage() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
