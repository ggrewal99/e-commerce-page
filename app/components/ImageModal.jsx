import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ImageShowcase from "@/app/components/ImageShowcase";



const ImageModal = ({ images, handleThumbnailClick, closeModal }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="modal-overlay fixed z-50 bg-black bg-opacity-40 inset-0">
            <div className="modal w-[35rem] h-auto relative top-[50%] left-[50%]
            transform -translate-y-[50%] -translate-x-[50%]">
                <button className="close-button absolute -top-9 bg-white rounded-lg right-0 p-2" onClick={closeModal}>
                    <IoMdClose className='scale-150 text-neutral-darkGrayishBlue hover:text-primary-orange
                    standard-transition' />
                </button>
                <button className="prev-button rounded-full bg-white absolute top-[50%] -left-0 transform
                -translate-x-[50%] -translate-y-[50%] p-4 hover:text-primary-orange standard-transition"
                        onClick={handlePrev}>
                    <FaChevronLeft className='' />
                </button>
                <ImageShowcase
                    images={images}
                    imageSelected={images[currentImageIndex]}
                    handleThumbnailClick={handleThumbnailClick}
                />
                <button className="next-button rounded-full bg-white absolute top-[50%] -right-0 transform
                translate-x-[50%] -translate-y-[50%] p-4 hover:text-primary-orange standard-transition"
                        onClick={handleNext}>
                    <FaChevronRight className='' />
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
