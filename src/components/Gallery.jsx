import React, { useState } from 'react';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  const totalImages = 50;

  const images = Array.from({ length: totalImages }, (_, i) => 
    `/assets/images/picture_${i + 1}.jpg`
  );

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="px-4 pb-16">
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleView}
          className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-2 rounded shadow"
        >
          {isGridView ? 'Carousel View' : 'Grid View'}
        </button>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full h-auto rounded shadow"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img
              src={images[currentImageIndex]}
              alt={`Memory ${currentImageIndex + 1}`}
              className="max-w-full max-h-[500px] rounded shadow"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={handlePrev}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`w-8 h-8 rounded ${
                  index === currentImageIndex
                    ? 'bg-black text-blue-400'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
