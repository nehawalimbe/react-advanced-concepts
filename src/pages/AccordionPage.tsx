import Accordion from "../components/Accordion";
import type { AccordionData } from "../types/AccordionData";

function AccordionPage() {
  const accordionData: AccordionData[] = [
    {
      id: 1,
      title: "Panel 1",
      content: "Some content for panel 1",
    },{
      id: 2,
      title: "Panel 2",
      content: "Some content for panel 2",
    },
  ];

  return <Accordion items={accordionData} defaultOpenId={0}></Accordion>;
}
export default AccordionPage;
