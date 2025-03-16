"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const images = [
  { path: "/images/game-play.jpg", name: "React.js Logo Image" },
  { path: "/images/images.png", name: "React Native Logo Image" },
  { path: "/images/gaming.jpg", name: "Next.js Logo Image" },
  { path: "/images/game.png", name: "React Native Logo Image" },
  { path: "/images/figma.png", name: "TypeScript Logo Image" },
  { path: "/images/illus.png", name: "JavaScript Logo Image" },
  { path: "/images/photoshop.png", name: "Material UI Logo Image" },
];

const ImageSlider: React.FC = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.path}
            alt={image.name}
            width={300}
            height={300}
            className="image-slider"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
