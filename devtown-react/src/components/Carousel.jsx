import React, { useState, useEffect } from 'react';
import cr1 from './img/cr1.jpg';
import cr2 from './img/cr2.jpg';
import cr3 from './img/cr3.jpg';
import cr4 from './img/cr4.jpg';
import cr5 from './img/cr5.jpg';

export default function Carousel() {

    const images = [cr1, cr2, cr3, cr4, cr5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 2000); 

        return () => {
            clearInterval(interval); 
        };
    }, []);

    return (
        <div className="relative w-full p-4">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="carousel image"
                className="w-full p-1 h-[500px] rounded-xl"
            />
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