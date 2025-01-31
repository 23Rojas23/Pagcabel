import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from 'prop-types';

const Carousel = ({ images, interval = 3000 }) => {
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
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
};
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};
export default Carousel;
