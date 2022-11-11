import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const CarouselButton = ({ isLeft = true }) => {
  return (
    <div>
      {isLeft ? <BsFillArrowLeftCircleFill /> : <BsFillArrowRightCircleFill />}
    </div>
  );
};

export default CarouselButton;
