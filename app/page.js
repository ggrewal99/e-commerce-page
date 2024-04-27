import React from 'react';
import Navbar from './components/Navbar';

function page() {
    return (
        <div className='mt-12 mx-2 lg:mx-4 flex'>
            <div className="img-showcase-section">
                <img src="/assets/images/image-product-1.jpg"
                     alt=""
                     className='rounded-xl'
                />
            </div>
            <div className="text-section md:px-8 py-16">
                <h2
                    className='uppercase font-extrabold text-primary-orange text-sm tracking-wider'>
                    Sneaker company
                </h2>
                <h1
                className='text-3xl font-bold'>Fall Limited Edition Sneakers</h1>
            </div>
        </div>
    );
}

export default page;