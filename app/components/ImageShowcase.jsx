import React, { useState } from 'react';
import IMAGE_SHOWCASE from '../constants';

const ImageShowcase = ({
    handleThumbnailClick,
    imageSelected,
    toggleModal = null,
}) => {
    return (
        <div className='img-showcase-section flex-1 flex flex-col'>
            <div className='main-img'>
                <img
                    src={imageSelected}
                    alt=''
                    className='rounded-xl w-full h-auto cursor-pointer'
                    onClick={toggleModal}
                />
            </div>
            <div className='other-img flex justify-between mt-8'>
                {Object.keys(IMAGE_SHOWCASE).map((key) => (
                    <img
                        key={key}
                        src={IMAGE_SHOWCASE[key]['thumbnail']}
                        alt=''
                        className={
                            'flex-1 max-w-[6rem] h-auto rounded-xl cursor-pointer hover:opacity-50 border-[3px] ' +
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
        </div>
    );
};

export default ImageShowcase;
