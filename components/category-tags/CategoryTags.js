import { Button } from "@chakra-ui/react";
import Link from "next/link";

const CategoryTags = ({ tags, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <Button
          size="sm"
          key={tags}
          borderRadius="full"
          variant="outline"
          colorScheme={"secondary"}
          fontSize={"sm"}
          _hover={{
            bg: "secondary.400",
            textColor: "white",
          }}
        >
          {tags}
        </Button>
      </Link>
    </>
  );
};

export default CategoryTags;
