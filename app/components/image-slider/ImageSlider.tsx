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
  { path: "/images/react.png", name: "React.js Logo Image" },
  { path: "/images/nextjs.jpg", name: "Next.js Logo Image" },
  { path: "/images/react-native-1.png", name: "React Native Logo Image" },
  { path: "/images/ts.jpg", name: "TypeScript Logo Image" },
  { path: "/images/js.jpg", name: "JavaScript Logo Image" },
  { path: "/images/mui.png", name: "Material UI Logo Image" },
  { path: "/images/bootstrap.jpg", name: "Bootstrap Logo Image" },
  { path: "/images/css.jpg", name: "CSS Logo Image" },
  { path: "/images/html.jpg", name: "HTML Logo Image" },
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
