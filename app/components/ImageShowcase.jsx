import React from 'react';

const ImageShowcase = ({ images, imageSelected, handleThumbnailClick, toggleModal = null }) => {
    return (
        <div className="img-showcase-section flex-1 flex flex-col">
            <div className='main-img'>
                <img
                    src={imageSelected}
                    alt=""
                    className='rounded-xl w-full h-auto cursor-pointer'
                    onClick={toggleModal}
                />
            </div>
            <div className='other-img flex justify-between mt-8'>
                {Object.keys(images).map(key => (
                    <img
                        key={key}
                        src={images[key]['thumbnail']}
                        alt=""
                        className={
                            'flex-1 max-w-[6rem] h-auto rounded-xl cursor-pointer hover:opacity-50 border-[3px] ' +
                            'standard-transition '
                            + (imageSelected === images[key]['full'] ?
                                'border-primary-orange opacity-75' : 'border-transparent')
                        }
                        onClick={() => handleThumbnailClick(images[key]['full'])}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageShowcase;
