import React from 'react';

const HeroImageCard = ({ heroImage, heroImage1 }) => {
    return (
        <>
            <header className="w-full h-auto relative">
                <div className="h-auto absolute left-20 top-20 z-10 text-white flex flex-col space-y-4 p-8 gap-5">
                    <p className="md:text-8xl text-4xl">Furniture For Everyone Loves</p>
                    <p className="font-medium text-xl md:text-4xl">Accessible all over Nepal. <br />Free delivery. 100% secure checkout</p>
                    <div className="mt-20 flex space-x-4 ">
                        <button className="px-6 py-2 bg-white text-black rounded-xl">SHOP NOW</button>
                        <button className="px-6 py-2 bg-white text-black rounded-xl">EXPLORE NOW</button>
                    </div>
                </div>
                <img
                
                    className=" hidden md:block z-0 w-full h-1/5"
                    src={heroImage}
                    alt="heroimage"
                />
                <div className='w-full h-screen md:hidden'>

                <img
                    className="w-full md:hidden z-0 h-full"
                    src={heroImage}
                    alt="heroimage"
                />
                </div>
            </header>
        </>
    );
};

export default HeroImageCard;
