import React from 'react'

const MainCard = ({ heroImage, description }) => {
    return (
        <>
            <header className="w-full h-auto relative">
                <div className="absolute right-1/3 top-1/3 z-10 text-2xl text-center text-white">
                    <h1 className='text-6xl font-bold'>{description}</h1>
                    <button className="mt-3 px-9 py-1 bg-white text-black rounded-3xl ">
                        Rent Now
                    </button>
                </div>
                <img
                    className="w-full h-[70vh] hidden md:block z-0"
                    src={heroImage}
                    alt=""
                />
                <img
                    className="w-full md:hidden z-0"
                    src="assets/images/hero.png"
                    alt=""
                />
            </header>
        </>
    )
}

export default MainCard