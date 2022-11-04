import CategoryTag from "@components/tag/category/CategoryTag";
import CategoryWrapper from "@components/wrapper/category/CategoryWrapper";
import { Fade } from "react-awesome-reveal";

import { tags } from "./ExploreTagsSection.mock";

const ExploreTagsSection = () => {
  return (
    <Fade>
      <section class="px-4 py-20 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
          <h1 class="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold font-heading">
            Explore More <span className="text-secondary-400">Tags</span>
          </h1>
          <p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            aspernatur voluptates sit atque reprehenderit beatae, sunt tempore
            quidem esse, facilis nobis aperiam provident officiis culpa impedit
            voluptate omnis repudiandae repellat.
          </p>
          <CategoryWrapper categoryList={tags}>
            <CategoryTag />
          </CategoryWrapper>
        </div>
      </section>
    </Fade>
  );
};

export default ExploreTagsSection;
