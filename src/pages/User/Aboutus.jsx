import React from 'react';
import customer from '../../assets/images/customer.png';
import delivery from '../../assets/images/delivery.png';
import design from '../../assets/images/design.png';
import returns from '../../assets/images/return.png';
import quality from '../../assets/images/secure.png';
import sustainable from '../../assets/images/sustainable.png';
import wide from '../../assets/images/wide.png';
import Footer from '../../components/Common/Footer';
import Navbar from '../../components/Common/Navbar';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-10 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 px-4 md:px-8">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Discover Our Passion for Quality Furniture
                            </h2>
                            <p className="mb-4">
                                At [Your Company Name], we blend creativity with craftsmanship. As designers and developers, we're dedicated to curating furniture that enhances your living space with elegance and functionality.
                            </p>
                            <p>
                                Our team thrives on innovation and problem-solving, ensuring each piece is crafted with attention to detail. Whether you're furnishing a cozy corner or transforming an entire room, we're here to make your vision a reality.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph" alt="Living Room Scene" />
                            <img className="mt-4 sm:mt-0 w-full lg:mt-10 rounded-lg" src="https://img.freepik.com/premium-photo/living-room-marble-wall-fireplace-stylish-bookcase-chic-expensive-interior-luxury-country-house-with-modern-design-with-wood-led-light-gray-furniture-with-gold-elements_267786-4943.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph" alt="Office Room Scene" />
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 w-full dark:bg-gray-800 px-4 py-8 md:px-8 md:py-16">
                    <div className="w-full mt-5 mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white mb-8 text-center">Our Goals and Objectives</h2>
                        <div className="grid gap-8 sm:gap-12 lg:gap-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={quality} alt="Quality First" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Quality First</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">We are committed to providing furniture of the highest quality, crafted with precision and attention to detail.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={customer} alt="Customer Satisfaction" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Customer Satisfaction</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">Our goal is to exceed customer expectations by delivering exceptional products and outstanding service.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={design} alt="Innovative Designs" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Innovative Designs</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">We constantly explore new design ideas to bring you furniture that reflects the latest trends and timeless aesthetics.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={sustainable} alt="Sustainable Practices" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Sustainable Practices</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">
                                    We are dedicated to eco-friendly practices, using responsibly sourced materials and reducing our environmental impact
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white w-full dark:bg-gray-900 px-4 py-8 md:px-8 md:py-16">
                    <div className="w-full mt-20 mx-auto lg:px-6">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 dark:text-white text-center mb-12 lg:mb-20">Why Choose Furniture Hub?</h2>
                        <div className="grid gap-8 sm:gap-12 lg:gap-20 lg:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={wide} alt="Wide Selection" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Wide Selection</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">Explore our vast collection of furniture styles to find the perfect match for your space.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={returns} alt="Affordable Prices" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Affordable Prices</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">Quality furniture doesn't have to break the bank. We offer competitive prices on all our products.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <img className="w-16 h-16 sm:w-20 sm:h-20 mb-4" src={delivery} alt="Fast Delivery" />
                                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">Fast Delivery</h3>
                                <p className="text-gray-500 text-base sm:text-lg dark:text-gray-400">Experience quick and reliable delivery services to get your furniture right when you need it.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
