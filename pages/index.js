import HeroSection from "@components/header/hero/HeroSection";
import ExploreTags from "@components/header/explore-tags-section/ExploreTags";
import FloatingActionButton from "@components/floating-action-button/FloatingActionButton";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExploreTags />
      <FloatingActionButton />
    </>
  );
};

export default Home;
