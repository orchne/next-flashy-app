import HeroSection from "@components/header/hero/HeroSection";
import ExploreTags from "@components/header/explore-tags-section/ExploreTags";
import FloatingActionButton from "@components/floating-action-button/FloatingActionButton";
import CardSlider from "@components/header/card-slider/CardSlider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CardSlider />
      <ExploreTags />
      <FloatingActionButton />
    </>
  );
};

export default Home;
