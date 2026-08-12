type AccordionItemProps = {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: (id: number) => void;
};
function AccordionItem({
  id,
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {

  return (
    <div className="accordion-item-container">
      <button
        onClick={() => onClick(id)}
        aria-expanded={isOpen}
        aria-controls={`panel-{id}`}
      >
        {title}
      </button>
      {isOpen && <div id={`panel-{id}`}>{content}</div>}      
    </div>
  );
}

export default AccordionItem;
