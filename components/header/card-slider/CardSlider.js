import { MdNavigateNext } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";

const CardSlider = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto p-3 w-full  text-left md:w-11/12 px-5">
        <div className="flex content-center">
          <h1 className="mb-3 text-3xl font-bold font-heading md:text-4xl md:leading-tight md:font-extrabold mr-3">
            Your Cards
          </h1>
          <button className="bg-secondary-500 rounded-full p-2 text-2xl self-start shadow-md text-white">
            <GrFormNextLink />
          </button>
        </div>
        <p class="mb-6 text-md text-gray-500 md:text-md md:leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          numquam saepe aliquid, iure repudiandae commodi, dolorem non
          reiciendis illum nostrum exercitationem quod, alias deserunt autem
          deleniti nisi voluptatum? Rem, nisi!
        </p>
      </div>
      <div className="flex justify-between max-w-md mx-auto md:max-w-3xl lg:max-w-6xl">
        <button className="bg-secondary-400 p-2 rounded-full rotate-180 text-white h-10 px-6 m-2">
          <MdNavigateNext />
        </button>
        <button className="bg-secondary-400 p-2 rounded-full text-white h-10 text-lg px-6 m-2">
          <MdNavigateNext />
        </button>
      </div>
    </section>
  );
};

export default CardSlider;
