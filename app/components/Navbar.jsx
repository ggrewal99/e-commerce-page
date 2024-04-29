'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/app/contexts/CartProvider';
import IMAGE_SHOWCASE from '@/app/constants';
import { FaTrashAlt } from 'react-icons/fa';

function Navbar() {
    const [isCartHovered, setIsCartHovered] = useState(false);

    const { cartItems, removeFromCart } = useCart();
    const handleCartHover = () => {
        setIsCartHovered(true);
    };

    const handleCartLeave = () => {
        setIsCartHovered(false);
    };

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <header className=''>
            <div
                className='flex border-b border-gray-200
         justify-between items-center gap-12 w-full'
            >
                <div className='flex-0.5'>
                    <Link href='/'>
                        <img
                            src='/assets/icons/logo.svg'
                            alt=''
                            className='logo'
                        />
                    </Link>
                </div>
                <ul className='text-sm list-none flex lg:gap-8 md:gap-4 text-gray-500 flex-1'>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8
                        transition ease-out duration-150'
                    >
                        Collections
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8
                        transition ease-out duration-150'
                    >
                        Men
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8
                        transition ease-out duration-150'
                    >
                        Women
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8
                        transition ease-out duration-150'
                    >
                        About
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8
                        transition ease-out duration-150'
                    >
                        Contact
                    </Link>
                </ul>

                <div className='flex items-center gap-10 nav-right flex-0.5'>
                    <div
                        className='relative'
                        onMouseEnter={handleCartHover}
                        onMouseLeave={handleCartLeave}
                    >
                        <img
                            src='/assets/icons/icon-cart.svg'
                            alt=''
                            className='cart-icon cursor-pointer'
                        />
                        {totalQuantity > 0 && (
                            <span
                                className='cart-qty text-sm absolute z-10 -top-[40%] -right-[60%] w-5 h-5 
                        text-center rounded-full bg-primary-orange cursor-pointer'
                            >
                                {totalQuantity}
                            </span>
                        )}
                        {isCartHovered && (
                            <div
                                className='cart-dropdown
                            shadow-lg absolute top-[100%] -right-[50%] z-[2] bg-white
                            rounded-md w-[20rem]'
                            >
                                <h1 className='font-bold border-b border-gray-200 px-4 py-5'>
                                    Cart
                                </h1>
                                <ul>
                                    {cartItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className='px-4 py-4 border-b border-gray-200 flex items-center'
                                        >
                                            <div>
                                                <img
                                                    src={
                                                        IMAGE_SHOWCASE[item.id][
                                                            'thumbnail'
                                                        ]
                                                    }
                                                    alt=''
                                                    className='w-[3.5rem] rounded-md me-2'
                                                />
                                            </div>
                                            <div className='flex flex-col flex-1'>
                                                <span className='text-sm text-neutral-darkGrayishBlue'>
                                                    {item.name}
                                                </span>
                                                <div className='flex gap-1'>
                                                    <span className='text-neutral-darkGrayishBlue'>
                                                        ${item.price}.00 x{' '}
                                                        {item.quantity}
                                                    </span>
                                                    <span className='font-bold'>
                                                        $
                                                        {item.price *
                                                            item.quantity}
                                                        .00
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                className='flex-0.5'
                                                onClick={() =>
                                                    handleRemoveFromCart(
                                                        item.id
                                                    )
                                                }
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </li>
                                    ))}
                                    {/* If cart is empty, display a message */}
                                    {cartItems.length === 0 && (
                                        <li className='px-4 py-4 text-center text-neutral-darkGrayishBlue'>
                                            Cart is empty
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div>
                        <img
                            src='/assets/icons/image-avatar.png'
                            alt=''
                            className='nav-avatar rounded-full hover:border-primary-orange border-2 border-transparent
                            transition ease-out duration-150 cursor-pointer hover:shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
