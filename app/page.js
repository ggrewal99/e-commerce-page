"use client";
import React, { useState } from 'react';
import IMAGE_SHOWCASE from "./constants";
import { IoCartOutline } from "react-icons/io5";
import ImageModal from "@/app/components/ImageModal";
import ImageShowcase from "@/app/components/ImageShowcase";
import {useCart} from "@/app/contexts/CartProvider";


function page() {
    const [imageSelected, setImageSelected] = useState(
        IMAGE_SHOWCASE['img-1']['full']
    );
    const [itemQuantity, setItemQuantity] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const { addToCart, cartItems } = useCart();

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

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleAddToCart = () => {
        // Below item is hardcoded because only 1 item exists for now
        const newCartItem = {
            id: 'img-1',
            name: 'Fall Limited Edition Sneakers',
            price: 125.00,
            quantity: itemQuantity
        };
        addToCart(newCartItem);

        console.log(cartItems)
    };

    return (
        <div className='mt-16 mx-2 lg:mx-12 flex gap-9'>
            <ImageShowcase
                handleThumbnailClick={handleThumbnailClick}
                imageSelected={imageSelected}
                toggleModal={toggleModal}
            />

            <div className="text-section md:px-8 py-16 flex-1">
                <h2
                    className='uppercase font-bold text-primary-orange text-sm tracking-widest'>
                    Sneaker company
                </h2>
                <h1
                    className='text-5xl font-bold break-words mt-6'>Fall Limited Edition Sneakers</h1>

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
                        standard-transition hover:opacity-50'
                            onClick={handleDecreaseQuantity}>-</button>
                        <span className='font-bold min-w-[4rem] text-center'>{itemQuantity}</span>
                        <button className='text-primary-orange font-bold text-2xl 
                        standard-transition hover:opacity-50'
                            onClick={handleIncreaseQuantity}>+</button>
                    </div>
                    <div className='flex-1'>
                        <button className='bg-primary-orange text-white w-full h-full
                        rounded-lg flex items-center justify-center hover:bg-opacity-50 standard-transition'
                        onClick={handleAddToCart}>
                            <IoCartOutline className='me-2 scale-150'/>
                            <span className='font-bold'>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <ImageModal
                    closeModal={toggleModal}
                    imageSelected={imageSelected}
                    setImageSelected={setImageSelected}
                    handleThumbnailClick={handleThumbnailClick}
                />
            )}
        </div>
    );
}

export default page;