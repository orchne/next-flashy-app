import { Container } from "@chakra-ui/react";
import CategoryTag from "@components/tag/category/CategoryTag";

import SearchBar from "@components/searchbar/SearchBar";
import CategoryWrapper from "@components/wrapper/category/CategoryWrapper";

const tags = [
  "Biology",
  "Chemistry",
  "Physics",
  "Python",
  "Javascript",
  "Algebra",
  "Eminem",
  "Git",
  "Social",
  "Agriculture",
  "Spanish",
  "English",
  "Indonesian",
  "Egyptian",
  "Malaysian",
];

const index = () => {
  return (
    <>
      <Container mt="8">
        <SearchBar />
      </Container>
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
        <CategoryWrapper categoryList={tags}>
          <CategoryTag />
        </CategoryWrapper>
      </div>
    </>
  );
};

export default index;
