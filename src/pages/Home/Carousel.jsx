

import { useState, useEffect, useRef, useCallback } from "react";

const Carousel = ({ images, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, interval);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, interval, images.length, nextSlide]);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div
        className="flex h-full w-full object-cover transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
