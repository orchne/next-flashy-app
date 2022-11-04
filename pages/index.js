import FloatingActionButton from "@components/button/floating-action/FloatingActionButton";
import CardCarousel from "@components/carousel/card/CardCarousel";
import LandingHero from "@components/hero/landing/LandingHero";
import ExploreTagsSection from "@components/section/explore-tags/ExploreTagsSection";

const Home = () => {
  return (
    <>
      <LandingHero />
      <CardCarousel />
      <ExploreTagsSection />
      <FloatingActionButton />
    </>
  );
};

export default Home;
