import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Economy",
      "Biology",
      "Chemistry",
      "Physics",
      "Korean",
      "Computer Science",
      "English",
      "Portugeese",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Your One Stop Solution for{" "}
            <span className="text-primary-400">Flashcard </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Make your own personalized flashcard. Browse many amazing flashcard
            for memorization of your study needs. Browse for{" "}
            <span className="text-primary-500">{text}</span>
            <Cursor cursorColor="#e95677" /> flashcards.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="#">
              <button
                className="px-8 py-3 shadow-md md:w-auto hover:bg-secondary-300 transition duration-200 focus:shadow-outline focus:outline-none text-lg font-semibold rounded-full bg-secondary-400"
                rel="noopener noreferrer"
              >
                Browse Flashcards
              </button>
            </Link>
            <Link href="#">
              <button
                className="px-8 py-3 text-lg font-semibold border rounded-full bg-primary-400 shadow-md md:w-auto transition duration-200 focus:shadow-outline focus:outline-none hover:bg-primary-300"
                rel="noopener noreferrer"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* <img
            src="https://img.freepik.com/free-vector/illustration-character-muslim-girl-boy-doing-worship-islam_10045-689.jpg?size=626&ext=jpg&ga=GA1.2.549142820.1666362124"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
