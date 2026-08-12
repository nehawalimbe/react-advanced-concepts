import { useCallback, useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import type { AccordionData } from "../types/AccordionData";
type AccordionProps = {
  items: AccordionData[];
  defaultOpenId: number;
};

function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [accordionOpenId, setAccordionOpenId] = useState<number | null>(null);
  // const [accordionOpenIds, setAccordionOpenIds] = useState<number[]>([]);
  // const handleAccordionClick1 = (id: number) => {
  //   if (accordionOpenIds.includes(id)) {
  //     setAccordionOpenIds((prevIds) => prevIds.filter((value) => value !== id));
  //   } else {
  //     setAccordionOpenIds((prevIds) => [...prevIds, id]);
  //   }
  // };

  useEffect(() => {
    // reset the accordionOpenId when accordion data is filtered
    if (accordionOpenId === null) {
      return;
    }
    const existingId = items.some((item) => {
      return item.id === accordionOpenId;
    });
    if (!existingId) {
      setAccordionOpenId(null);
    }
  }, [items, accordionOpenId]);

  const handleAccordionClick = useCallback((id: number) => {
    setAccordionOpenId((prevId) => {
      return id === prevId ? null : id;
    });
  }, []);

  // const handleAccordionClick = useCallback(
  //   (id: number) => {
  //     if (id === accordionOpenId) {
  //       setAccordionOpenId(null);
  //     } else {
  //       setAccordionOpenId(id);
  //     }
  //   },
  //   [accordionOpenId],
  // );
  // const isAccordionOpen = (id: number): boolean => {
  //   return accordionOpenId === id;
  // };
  return (
    <div>
      {items.map((accordionDetails) => {
        return (
          <AccordionItem
            key={accordionDetails.id}
            id={accordionDetails.id}
            title={accordionDetails.title}
            content={accordionDetails.content}
            isOpen={accordionOpenId === accordionDetails.id}
            onClick={handleAccordionClick}
          ></AccordionItem>
        );
      })}
    </div>
  );
}
export default Accordion;
