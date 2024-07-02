import FAQItem from "../../components/Cart/FaqItem";
import Footer from "../../components/Common/Footer";
import MainImageCard from "../../components/Common/MainCard";
import Navbar from '../../components/Common/Navbar';
import heroImage from '../../assets/images/hero.png';

const FaqPage = () => {
  const faqs = [
    {
      question: "What types of furniture do you offer?",
      answer:
        "We offer a wide range of furniture for various spaces in your home, including living room sets, bedroom furniture, dining room tables and chairs, office desks, outdoor furniture, and more. Our collection includes modern, traditional, and contemporary styles to suit your taste and needs.",
    },
    {
      question: "Do you provide delivery and assembly services?",
      answer:
        "Yes, we provide delivery and assembly services for your convenience. Our team will deliver your furniture to your home and assemble it for you, ensuring everything is set up correctly and to your satisfaction. Delivery and assembly fees may vary based on location and the type of furniture purchased.",
    },
    {
      question: "What is your return and exchange policy?",
      answer:
        "We want you to be completely satisfied with your purchase. If you are not happy with your furniture, you can return or exchange it within 30 days of delivery. The furniture must be in its original condition and packaging. Please note that custom-made or clearance items may have different return policies. Contact our customer service team for more details.",
    },
    // Add more FAQs here
  ];

  return (
    <>
      <Navbar />
      <MainImageCard description={`FAQ`} heroImage={heroImage} />
      <div className="container mx-auto mt-8 px-4 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto mb-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;