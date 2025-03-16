import ContactSection from "../components/contact-section/ContactSection";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="page-container">
      <BackgroundBeamsWithCollision>
      <div className="page-section">
        < ContactSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
