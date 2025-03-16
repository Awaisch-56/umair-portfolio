import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="about-container">
        <h2 className="about-title">
          About{" "}
          <span className="highlight-text">Me</span>
        </h2>

        <div className="about-grid">
          <Image
            src="/images/picture.jpg"
            alt="About Section Image"
            width={500}
            height={550}
            className="about-image"
          />

          <div className="about-text">
            <div className="info-box">
              <p className="text-content">
              I am a Game UI/UX Designer & Graphic Artist with 3 years of experience, specializing in game interface design, 2D & 3D rendering, and graphic design. My passion is creating immersive and user-friendly experiences that blend creativity with functionality.
                <br />{" "}
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              As a Game UI/UX Designer, I focus on designing intuitive and visually appealing game interfaces, including buttons, icons, and interactive elements. My approach ensures that the player experience is smooth, immersive, and engaging. I work on wireframing, prototyping, and final UI implementation, ensuring that every design aligns seamlessly with the game’s theme and mechanics. Additionally, my experience in 2D & 3D rendering helps bring game visuals to life, making the interface both functional and visually dynamic.
                <br />
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              As a Graphic Designer, I create logos, illustrations, and marketing materials using Figma, Adobe Illustrator, Photoshop, and Canva. My work focuses on delivering high-quality visuals that effectively communicate ideas and enhance branding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;