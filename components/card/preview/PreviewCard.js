import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PreviewCard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="w-96 h-52 sm:w-96 sm:h-48 md:w-80 md:h-56 lg:w-72 lg:h-52 bg-primary-500 rounded-md"></div>

        <div className="w-96 h-52 sm:w-96 sm:h-48 md:w-80 md:h-56 lg:w-72 lg:h-52 bg-secondary-500 rounded-md"></div>
      </ReactCardFlip>
    </div>
  );
};

export default PreviewCard;
