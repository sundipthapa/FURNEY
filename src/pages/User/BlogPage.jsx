import React from 'react';
import Navbar from '../../components/Common/Navbar';
import Footer from '../../components/Common/Footer';

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mx-auto">
        {/* Main Content */}
        <main className="w-full h-auto mt-10">
          {/* Single Blog Post */}
          <div className="mb-4  md:mb-0 w-full h-96 mx-auto relative" style={{ height: '48em' }}>
            <div className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
            <img
              src="https://img.freepik.com/premium-photo/modern-living-room-with-cozy-furniture_861346-18943.jpg?size=626&ext=jpg&ga=GA1.1.785138068.1718180203&semt=sph"
              className="absolute left-0 top-0 w-full h-full z-0 object-cover" alt="Blog Cover" />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Furniture Shop
              </h2>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-200 text-sm"> FURNEY </p>
                  <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="px-4 lg:px-30 mt-12 text-gray-700 w-full mx-auto text-lg leading-relaxed">
            {/* Introduction */}
            <p className="pb-6">Your blog content goes here...</p>

            {/* Section: Discover Your Style */}
            <section className="pb-6">
              <h3 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Discover Your Style: Exploring Diverse Furniture Selections</h3>

              <p>At [Your Furniture E-commerce], we believe that furniture is more than just functional—it's an expression of your style and personality. Whether you're furnishing a cozy apartment, redecorating your living room, or designing a modern office space, our curated collection offers something for every taste and need.</p>
            </section>

            {/* Subsection: Embrace Comfort with Our Living Room Essentials */}
            <section className="pb-6">
              <h4 className="text-xl text-gray-800 font-semibold mb-3">Embrace Comfort with Our Living Room Essentials</h4>

              <p>Your living room is the heart of your home, where comfort meets style. Our collection of sofas, armchairs, and coffee tables combines sleek design with plush comfort. Imagine sinking into a luxurious velvet sofa after a long day, or gathering around a beautifully crafted coffee table for intimate conversations. From Scandinavian minimalism to classic elegance, find pieces that elevate your living space.</p>
            </section>

            {/* Subsection: Transform Your Dining Experience */}
            <section className="pb-6">
              <h4 className="text-xl text-gray-800 font-semibold mb-3">Transform Your Dining Experience</h4>

              <p>Entertain in style with our diverse range of dining sets, from contemporary glass tables to rustic wooden designs. Whether you prefer intimate dinners or large gatherings, our dining furniture blends functionality with aesthetic appeal. Explore chairs that offer ergonomic support without compromising on elegance, and tables that are perfect for both casual meals and formal dinners.</p>
            </section>

            {/* Subsection: Create Your Sanctuary: Bedroom Bliss */}
            <section className="pb-6">
              <h4 className="text-xl text-gray-800 font-semibold mb-3">Create Your Sanctuary: Bedroom Bliss</h4>

              <p>Your bedroom should be a sanctuary—a place where relaxation meets rejuvenation. Discover our bedroom furniture collection, featuring cozy beds, spacious wardrobes, and elegant dressers. Choose from a variety of styles, from timeless wooden bed frames to modern upholstered headboards. Complete your bedroom oasis with nightstands that blend seamlessly into your decor, offering both storage and style.</p>
            </section>

            {/* Subsection: Elevate Your Workspace */}
            <section className="pb-6">
              <h4 className="text-xl text-gray-800 font-semibold mb-3">Elevate Your Workspace</h4>

              <p>Transform your office into a productive and inspiring environment with our office furniture solutions. Explore ergonomic chairs that support long hours of work, sleek desks that enhance organization, and storage solutions that keep your workspace clutter-free. Whether you work from home or in a corporate setting, our office furniture combines functionality with contemporary design, helping you stay focused and motivated.</p>
            </section>

            {/* Quality Craftsmanship and Sustainability */}
            <section className="pb-6">
              <h3 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Quality Craftsmanship and Sustainability</h3>

              <p>At [Your Furniture E-commerce], we prioritize quality craftsmanship and sustainability. Our furniture is crafted from durable materials, ensuring longevity and comfort. We source responsibly, supporting sustainable practices that minimize environmental impact. Each piece is designed to enhance your living spaces while contributing to a greener future.</p>
            </section>

            {/* Shop with Confidence */}
            <section className="pb-6">
              <h3 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Shop with Confidence</h3>

              <p>Browse our online store and discover a world of possibilities for your home and office. With easy navigation and secure checkout, shopping at [Your Furniture E-commerce] is convenient and enjoyable. Whether you're revamping a single room or furnishing an entire space, our customer service team is here to assist you every step of the way.</p>
            </section>

            {/* Join Our Community */}
            <section className="pb-6">
              <h3 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Join Our Community</h3>

              <p>Join our community of design enthusiasts and homeowners who are passionate about creating beautiful spaces. Follow us on social media for design inspiration, exclusive offers, and customer stories. Share your own #YourFurnitureEcommerce moments and be part of a community that celebrates creativity and style.</p>
            </section>

            {/* Conclusion */}
            <section className="pb-6">
              <p className="pb-6">Transform your living spaces with furniture that reflects your unique taste and enhances your everyday life. Explore our collection today and discover why [Your Furniture E-commerce] is your ultimate destination for stylish and functional furniture.</p>
            </section>

          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default BlogPage;
