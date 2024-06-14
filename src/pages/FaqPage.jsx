import MainImageCard from "../components/Common/MainCard";
import FAQItem from "../components/Cart/FaqItem";
import Footer from "../components/Common/Footer";
import Navbar from '../components/Common/Navbar';
import heroImage  from '../assets/images/hero.png'

const FaqPage = () => {
    const faqs = [
      {
        question: "How does the clothing rental process work?",
        answer:
          "You can browse through our collection, select your desired items, and choose the rental period. Once your order is confirmed, we will deliver the items to your address.",
      },
      {
        question: "What if the rented clothes don't fit?",
        answer:
          "We offer a hassle-free return and exchange policy. If the clothes don't fit, you can return them within 24 hours and request a different size or a refund.",
      },
      {
        question: "How do I care for rented clothes?",
        answer:
          "Our clothes come with care instructions. Generally, you should avoid washing them at home and instead use the included prepaid return bag to send them back to us. We handle all the cleaning.",
      },
      // Add more FAQs here
    ];
  
    return (
      <>
        <Navbar />
        <MainImageCard description={`Your Asked \n We Answered`} heroImage={heroImage}/>
        <div className="container mx-auto mt-8 px-4 mb-10">
          <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
          <div className="max-w-3xl mx-auto mb-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default FaqPage;