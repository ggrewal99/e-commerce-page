'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import {useCart} from '@/app/contexts/CartProvider';
import IMAGE_SHOWCASE from '@/app/constants';
import {FaTrashAlt} from 'react-icons/fa';
import {GoTriangleUp} from "react-icons/go";
import {IoMenu, IoCartOutline} from "react-icons/io5";
import {IoMdClose} from "react-icons/io";


function Navbar() {
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const {cartItems, removeFromCart} = useCart();
    const handleCartHover = () => {
        setIsCartHovered(true);
    };

    const handleCartLeave = () => {
        setIsCartHovered(false);
    };

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const navbarLinks = [{text: 'Collections', url: '#'}, {text: 'Men', url: '#'}, {
        text: 'Women',
        url: '#'
    }, {text: 'About', url: '#'}, {text: 'Contact', url: '#'},];

    return (<header className=''>
        <div
            className='relative md:static flex border-b border-gray-200
         justify-between items-center gap-6 md:gap-12 w-full px-3 md:px-0 select-none'
        >
            <div className='flex'>
                <div
                    className='text-2xl text-neutral-darkGrayishBlue cursor-pointer md:hidden me-4'
                    onClick={toggleDrawer}
                >
                    <IoMenu/>
                </div>
                <Link href='/'>
                    <img
                        src='/assets/icons/logo.svg'
                        alt='Sneakers Logo'
                        className='logo'
                    />
                </Link>
            </div>
            <ul className='text-sm list-none lg:gap-8 md:gap-4 text-gray-500 flex-1 hidden md:flex'>
                {navbarLinks.map((link, index) => (
                    <li key={index} className='hover:border-b-4 hover:border-primary-orange pt-12 pb-12 hover:pb-8
                        transition ease-out duration-150 cursor-pointer'>
                        <Link href={link.url}>{link.text}</Link>
                    </li>))}
            </ul>

            <div className='flex items-center gap-10 nav-right'>
                <div
                    className='md:relative'
                    onMouseEnter={handleCartHover}
                    onMouseLeave={handleCartLeave}
                >
                    <div className='cursor-pointer py-12 relative'>
                        <IoCartOutline className='scale-[170%]' />
                        {totalQuantity > 0 && (<span
                            className='cart-qty text-sm absolute z-10 top-[30%] left-[50%] w-5 h-5
                        text-center rounded-full bg-primary-orange cursor-pointer'
                        >
                                {totalQuantity}
                            </span>)}
                    </div>
                    {isCartHovered && (
                        <div
                            className='cart-dropdown
                            shadow-2xl absolute top-[110%] md:top-[80%] left-[50%] -translate-x-1/2 z-[2] bg-white
                            rounded-md w-[95vw] md:w-[21rem]'
                        >
                            <div
                                className='opacity-0 md:opacity-100 text-2xl absolute top-0 left-[82%] md:left-[50%]
                                -translate-x-1/2 -translate-y-[75%]
                                text-primary-orange z-[20]'>
                                <GoTriangleUp/></div>
                            <h1 className='font-bold border-b border-gray-200 px-4 py-5'>
                                Cart
                            </h1>
                            <ul>
                                {cartItems.map((item, index) => (<li
                                    key={index}
                                    className='px-5 py-5 flex items-center'
                                >
                                    <div>
                                        <img
                                            src={IMAGE_SHOWCASE[item.id]['thumbnail']}
                                            alt=''
                                            className='w-[3.2rem] rounded-md me-2'
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
                                                {item.price * item.quantity}
                                                .00
                                                    </span>
                                        </div>
                                    </div>
                                    <button
                                        className='flex-0.5 text-neutral-grayishBlue hover:text-primary-orange standard-transition'
                                        onClick={() => handleRemoveFromCart(item.id)}
                                    >
                                        <FaTrashAlt/>
                                    </button>
                                </li>))}
                                {cartItems.length === 0 && (
                                    <li className='px-4 py-16 text-center font-semibold text-neutral-darkGrayishBlue'>
                                        Your cart is Empty
                                    </li>)}
                            </ul>
                            {cartItems.length > 0 && (<div className='px-4 pb-4'>
                                <button className='font-bold text-white bg-primary-orange w-full
                                        rounded-md py-2.5 hover:opacity-75 standard-transition'>Checkout
                                </button>
                            </div>)}
                        </div>)}
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

            <div
                className={'fixed z-10 top-0 left-0 h-[100vh] w-[100vw] bg-black bg-opacity-25 transition duration-300 ease-out ' +
                    `${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[75vw] h-full bg-white px-5 py-12'>
                    <div
                        className='close-button cursor-pointer'
                        onClick={toggleDrawer}
                    >
                        <IoMdClose
                            className='scale-150 text-neutral-darkGrayishBlue hover:text-primary-orange
                    standard-transition'
                        />
                    </div>
                    <ul className='list-none lg:gap-8 md:gap-4 font-bold text-lg flex flex-col gap-3 mt-8'>
                        {navbarLinks.map((link, index) => (
                            <li key={index} className='border-b-4 border-white hover:border-primary-orange
                        transition ease-out duration-150 cursor-pointer'>
                                <Link href={link.url}>{link.text}</Link>
                            </li>))}
                    </ul>
                </div>
            </div>


        </div>
    </header>);
}

export default Navbar;
