import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle, FaInfoCircle } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-4">
          <FaQuestionCircle className="text-blue-500"  color="red" size={30}/>
          <span className="text-lg font-semibold">{question}</span>
        </div>
        {isOpen ? (
          <FaMinus className="text-gray-500" />
        ) : (
          <FaPlus className="text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="mt-4 pl-7 flex items-start gap-2">
          <FaInfoCircle className="text-green-500 mt-1" />
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;