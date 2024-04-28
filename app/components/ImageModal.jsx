import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import ImageShowcase from '@/app/components/ImageShowcase';
import IMAGE_SHOWCASE from '../constants';

const ImageModal = ({
    handleThumbnailClick,
    closeModal,
    imageSelected,
    setImageSelected,
}) => {
    const images = Object.values(IMAGE_SHOWCASE).map((image) => image.full);

    const [currentImageIndex, setCurrentImageIndex] = useState(
        images.indexOf(imageSelected)
    );

    const handlePrev = () => {
        const prevIndex =
            currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
        setImageSelected(images[prevIndex]);
    };

    const handleNext = () => {
        const nextIndex =
            currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
        setImageSelected(images[nextIndex]);
    };

    return (
        <div className='modal-overlay fixed z-50 bg-black bg-opacity-80 inset-0'>
            <div
                className='modal w-[30rem] h-auto relative top-[50%] left-[50%]
            transform -translate-y-[50%] -translate-x-[50%]'
            >
                <button
                    className='close-button absolute -top-9 bg-white rounded-lg right-0 p-2'
                    onClick={closeModal}
                >
                    <IoMdClose
                        className='scale-150 text-neutral-darkGrayishBlue hover:text-primary-orange
                    standard-transition'
                    />
                </button>
                <button
                    className='prev-button rounded-full bg-white absolute top-[40%] -left-0 transform
                -translate-x-[50%] -translate-y-[50%] p-4 hover:text-primary-orange standard-transition'
                    onClick={handlePrev}
                >
                    <FaChevronLeft />
                </button>
                <ImageShowcase
                    imageSelected={imageSelected}
                    handleThumbnailClick={handleThumbnailClick}
                />
                <button
                    className='next-button rounded-full bg-white absolute top-[40%] -right-0 transform
                translate-x-[50%] -translate-y-[50%] p-4 hover:text-primary-orange standard-transition'
                    onClick={handleNext}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
