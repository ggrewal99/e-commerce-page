"use client";
import React, { useState } from 'react';
import IMAGE_SHOWCASE from "./constants";

function page() {
    const [imageSelected, setImageSelected] = useState(IMAGE_SHOWCASE['img-1']['full']);
    const [itemQuantity, setItemQuantity] = useState(0);

    const handleThumbnailClick = (imageUrl) => {
        setImageSelected(imageUrl);
    };

    const handleDecreaseQuantity = () => {
        if (itemQuantity > 0) {
            setItemQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        setItemQuantity(prevQuantity => prevQuantity + 1);
    };
    return (
        <div className='mt-16 mx-2 lg:mx-12 flex gap-9'>
            <div className="img-showcase-section flex-1 flex flex-col">
                <div className='main-img'>
                    <img src={imageSelected}
                        alt=""
                        className='rounded-xl w-[30rem] h-auto m-w-[20rem]
                        cursor-pointer'
                    />
                </div>
                <div className='other-img flex justify-between mt-8'>
                    {Object.keys(IMAGE_SHOWCASE).map(key => (
                        <img
                            key={key}
                            src={IMAGE_SHOWCASE[key]['thumbnail']}
                            alt=""
                            className={
                                'w-[5rem] h-auto rounded-xl cursor-pointer hover:opacity-50 border-[3px] '
                                + (imageSelected === IMAGE_SHOWCASE[key]['full'] ?
                                    'border-primary-orange opacity-75' : 'border-transparent')
                            }
                            onClick={() => handleThumbnailClick(IMAGE_SHOWCASE[key]['full'])}
                        />
                    ))}
                </div>
            </div>
            <div className="text-section md:px-8 py-16 flex-1">
                <h2
                    className='uppercase font-semibold text-primary-orange text-sm tracking-widest'>
                    Sneaker company
                </h2>
                <h1
                    className='text-4xl font-bold break-words mt-6'>Fall Limited Edition Sneakers</h1>

                <p className='text-neutral-darkGrayishBlue mt-10'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>

                <div className='price flex flex-col mt-6'>
                    <div className='flex items-center gap-5'>
                        <h1 className='font-bold text-3xl'>$125.00</h1>
                        <span className='bg-primary-paleOrange text-primary-orange px-2 py-1 rounded-md font-bold'>50%</span>
                    </div>
                    <h2 className='text-neutral-grayishBlue mt-2 font-bold line-through'>$250.00</h2>
                </div>

                <div className='purchase mt-6 flex gap-3'>
                    <div className='qty flex items-center gap-3 bg-neutral-lightGrayishBlue 
                    flex-0.5 rounded-lg p-3'>
                        <button className='text-primary-orange font-bold text-2xl 
                        transition ease-out duration-150 hover:opacity-50'
                            onClick={handleDecreaseQuantity}>-</button>
                        <span className='font-bold min-w-[4rem] text-center'>{itemQuantity}</span>
                        <button className='text-primary-orange font-bold text-2xl 
                        transition ease-out duration-150 hover:opacity-50'
                            onClick={handleIncreaseQuantity}>+</button>
                    </div>
                    <div className='flex-1'>
                        <button className='bg-primary-orange text-white w-full h-full 
                        rounded-lg flex items-center justify-center hover:bg-opacity-50 transition ease-out duration-150'>
                            <img
                                src='/assets/icons/icon-cart.svg'
                                alt=''
                                className='cart-icon button me-2'
                            />
                            <span className='font-bold'>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;