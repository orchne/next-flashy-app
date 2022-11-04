import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PreviewCard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="w-96 h-52 sm:w-72 sm:h-40 bg-primary-500 rounded-md"></div>

        <div className="w-96 h-52 bg-blue-400 rounded-md"></div>
      </ReactCardFlip>
    </div>
  );
};

export default PreviewCard;
