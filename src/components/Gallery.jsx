import Slider from "react-slick";
import { useState } from "react";

const images = [
  "../../public/assets/images/picture_1",
  "/picture_2.jpg",
  "/picture_3.jpg",
  "/picture_4.jpg",
  "/picture_5.jpg",
];

export default function Gallery() {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => setIsGridView(!isGridView);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
          onClick={toggleView}
        >
          Switch to {isGridView ? "Carousel" : "Grid"} View
        </button>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Memory ${idx + 1}`}
              className="w-full h-auto rounded shadow"
            />
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {images.map((src, idx) => (
            <div key={idx}>
              <img
                src={src}
                alt={`Memory ${idx + 1}`}
                className="mx-auto rounded shadow-lg"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
