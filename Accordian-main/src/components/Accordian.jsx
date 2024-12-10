import React, { useState } from "react";
import faqdata from "./Api";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setActiveIndex(null);
      np;
    }
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleShowAll}>
        {showAll ? "Hide All Answers" : "Show All Answers"}
      </button>
      {faqdata.map((item, index) => (
        <div className="accordion" key={index}>
          <h3 className="accordion-question" onClick={() => toggleIndex(index)}>
            {item.question}
          </h3>
          {(showAll || activeIndex === index) && (
            <p className="accordion-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
