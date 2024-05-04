import React, {useState} from 'react';
import IMAGE_SHOWCASE from '../constants';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const ImageShowcase = ({
                           handleThumbnailClick,
                           imageSelected,
                           toggleModal = null,
                           setImageSelected,
                           showModal = false
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
        <div className='img-showcase-section flex-1 flex flex-col md:max-w-[35rem] relative'>
            <div className='main-img'>
                <img
                    src={imageSelected}
                    alt=''
                    className={`${showModal ? 'rounded-xl' : ''} h-auto cursor-pointer`}
                    onClick={toggleModal}
                />
            </div>
            <div className='other-img hidden md:flex justify-between mt-8'>
                {Object.keys(IMAGE_SHOWCASE).map((key) => (
                    <img
                        key={key}
                        src={IMAGE_SHOWCASE[key]['thumbnail']}
                        alt=''
                        className={
                            'flex-1 max-w-[4.7rem] md:max-w-[6rem] h-auto rounded-xl cursor-pointer hover:opacity-50 border-[3px] ' +
                            'standard-transition ' +
                            (imageSelected === IMAGE_SHOWCASE[key]['full']
                                ? 'border-primary-orange opacity-75'
                                : 'border-transparent')
                        }
                        onClick={() =>
                            handleThumbnailClick(IMAGE_SHOWCASE[key]['full'])
                        }
                    />
                ))}
            </div>

            <button
                className={'prev-button rounded-full bg-white absolute md:-translate-y-[50%] -translate-y-[50%] left-0 ' +
                    `${!showModal ? 'md:hidden top-[50%] translate-x-[30%]' : 'top-[40%] -translate-x-[50%] translate-y-[50%] md:-translate-y-[50%]'}   ` +
                    ' p-4 hover:text-primary-orange standard-transition'}
                onClick={handlePrev}
            >
                <FaChevronLeft/>
            </button>

            <button
                className={'next-button rounded-full bg-white absolute right-0 -translate-y-[50%] ' +
                    `${!showModal ? 'md:hidden top-[50%] -translate-x-[30%]' : 'top-[40%] translate-x-[50%] translate-y-[50%] md:-translate-y-[50%]'}   ` +
                    '  p-4 hover:text-primary-orange standard-transition'}
                onClick={handleNext}
            >
                <FaChevronRight/>
            </button>
        </div>
    );
};

export default ImageShowcase;
