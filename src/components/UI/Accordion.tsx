import React, { useState, useRef } from "react";
import { elMessiri, playfairDisplay } from "@/app_config";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { AccordionItem } from "@/types";

type AccordionItemProps = {
  title: string;
  content: string;
  index: number;
  expandedItem: number | null;
  setExpandedItem: React.Dispatch<React.SetStateAction<number | null>>;
  toggleExpanded: (index: number) => void;
};

type AccordionProps = {
  items: AccordionItem[];
};

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  title,
  content,
  index,
  expandedItem,
  toggleExpanded,
}) => {
  const contentRef = useRef<HTMLDivElement>(null); // Ref for content div

  // Function to calculate and set the height dynamically
  const getContentHeight = () => {
    if (contentRef.current) {
      return contentRef.current.scrollHeight + "px";
    }
    return "0px";
  };

  // Split content by line breaks to render paragraphs
  const paragraphs = content.split("\n").map((paragraph, idx) => (
    <p
      key={idx}
      className={`${playfairDisplay.className} text-lg md:text-xl mb-6`}
    >
      {paragraph}
    </p>
  ));

  return (
    <div className="my-2 sm:my-4 md:my-6 mx-4 max-w-screen-md">
      <div
        className="flex items-center h-14 px-4 cursor-pointer select-none border-b-2 border-pink-700"
        onClick={() => toggleExpanded(index)}
      >
        <h1 className={`${elMessiri.className} flex-1 text-lg md:text-2xl`}>
          {title}
        </h1>
        <div className="pl-2">
          <ChevronLeftIcon
            className={`${
              expandedItem === index ? "-rotate-90" : ""
            } w-7 text-pink-700 transition-all`}
          />
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-max-height duration-500 ease-in`}
        style={{
          maxHeight: expandedItem === index ? getContentHeight() : "0px",
        }}
      >
        <div className="p-4 pt-8" ref={contentRef}>
          {paragraphs}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null); // Close the currently open item
    } else {
      setExpandedItem(index); // Open the clicked item
    }
  };

  return (
    <div className="max-w-screen-md mx-auto">
      {items.map((item, index) => (
        <AccordionItemComponent
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          expandedItem={expandedItem}
          setExpandedItem={setExpandedItem}
          toggleExpanded={toggleExpanded}
        />
      ))}
    </div>
  );
};

export default Accordion;
