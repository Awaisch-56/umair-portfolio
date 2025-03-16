import Project from "../components/project-component/Project";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";


export default function Home() {
  return (
    <main className="page-container">
     <BackgroundBeamsWithCollision>
     <div className="page-section">
      <Project />
    </div>
     </BackgroundBeamsWithCollision>
    </main>
  );
}
