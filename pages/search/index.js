import { Container } from "@chakra-ui/react";
import CategoryTags from "@components/category-tags/CategoryTags";
import SearchBar from "@components/searchbar/SearchBar";
import CategoryWrapper from "@components/wrapper/CategoryWrapper";

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
];

const index = () => {
  return (
    <>
      <Container mt="8">
        <SearchBar />
      </Container>
      <CategoryWrapper categoryList={tags}>
        <CategoryTags />
      </CategoryWrapper>
    </>
  );
};

export default index;
