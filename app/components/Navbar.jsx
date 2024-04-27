import React from 'react';
import Link from 'next/link';

function Navbar() {
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
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8'
                    >
                        Collections
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8'
                    >
                        Men
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8'
                    >
                        Women
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8'
                    >
                        About
                    </Link>
                    <Link
                        href='/'
                        className='hover:border-b-4 hover:border-primary-orange pt-10 pb-12 hover:pb-8'
                    >
                        Contact
                    </Link>
                </ul>

                <div className='flex items-center gap-10 nav-right flex-0.5'>
                    <div>
                        <img
                            src='/assets/icons/icon-cart.svg'
                            alt=''
                            className='cart-icon'
                        />
                    </div>
                    <div>
                        <img
                            src='/assets/icons/image-avatar.png'
                            alt=''
                            className='nav-avatar rounded-full hover:border-primary-orange border-2 border-transparent cursor-pointer hover:shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
