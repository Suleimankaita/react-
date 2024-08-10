import React, { useState, useEffect,useMemo, useCallback } from 'react';
import img1 from "./img/g1.jpg"
import img2 from "./img/g2.jpg"
import img3 from "./img/g3.jpg"
import img4 from "./img/g4.jpg"

const images = [
        img1,
        img2,
        img3,
        img4
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); 

    return () => clearInterval(interval);

  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt="" width={"300px"} height={"100%"} />
          </div>
        ))}
      </div>
      {/* <div className="carousel-controls">
        <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="carousel-indicators"> */}
        {/* {images.map((_, index) => (
          <button
            key={index}
            className={currentIndex === index ? 'active' : null}
            onClick={() => goToSlide(index)}
          ></button>
        ))} */}
      {/* </div> */}
    </div>
    </>
    
  );
};

export default Carousel;
