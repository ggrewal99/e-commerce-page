import React, {useState} from 'react';
import {IoMdClose} from 'react-icons/io';
import ImageShowcase from '@/app/components/ImageShowcase';

const ImageModal = ({
                        handleThumbnailClick,
                        closeModal,
                        imageSelected,
                        setImageSelected,
    showModal = true,
                    }) => {

    return (
        <div className='modal-overlay fixed z-50 bg-black bg-opacity-80 inset-0'>
            <div
                className='modal w-[80vw] md:w-[30rem] md: h-auto relative top-[50%] left-[50%]
            transform -translate-y-[50%] -translate-x-[50%]'
            >
                <button
                    className='close-button absolute top-0 z-20 right-0 p-2'
                    onClick={closeModal}
                >
                    <IoMdClose
                        className='scale-[175%] text-neutral-darkGrayishBlue hover:text-primary-orange
                    standard-transition'
                    />
                </button>
                <ImageShowcase
                    imageSelected={imageSelected}
                    handleThumbnailClick={handleThumbnailClick}
                    setImageSelected={setImageSelected}
                    showModal={showModal}
                />
            </div>
        </div>
    );
};

export default ImageModal;
