import React, { useState } from 'react';
import cr1 from './img/cr1.jpg';
import cr2 from './img/cr2.jpg';
import cr3 from './img/cr3.jpg';
import cr4 from './img/cr4.jpg';
import cr5 from './img/cr5.jpg';
import cr6 from './img/cr6.jpg';
import cr7 from './img/cr7.jpg';
import cr8 from './img/cr8.jpg';
import left from "./img/leftar1.svg";
import right from './img/rightar1.svg';

export default function Carousel() {
    const images = [cr1, cr2, cr3, cr4, cr5, cr6, cr7, cr8];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full p-4">
            <img src={left} onClick={handlePrevious} className="p-1 w-10 h-10 z-50 btn-prev absolute left-0 top-1/2 transform -translate-y-1/2"/>
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="carousel"
                className="w-full p-1 lg:h-[650px] h-[400px] rounded-xl"
            />
            <img src={right} onClick={handleNext} className="p-1 w-10 h-10 z-50 btn-next absolute right-0 top-1/2 transform -translate-y-1/2"/>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 mx-2 rounded-full bg-gray-400 cursor-pointer ${currentIndex === index ? 'bg-red-400' : ''
                            }`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}
