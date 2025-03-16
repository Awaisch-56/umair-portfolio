import HeroSection from "./components/hero-section/HeroSection";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="page-container">
      <BackgroundBeamsWithCollision>
      <div className="page-section">
    <HeroSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
