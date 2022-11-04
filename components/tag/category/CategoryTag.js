import { Button } from "@chakra-ui/react";
import Link from "next/link";

const CategoryTag = ({ tag, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <Button
          size="sm"
          key={tag}
          borderRadius="full"
          variant="outline"
          colorScheme={"secondary"}
          fontSize={"sm"}
          _hover={{
            bg: "secondary.400",
            textColor: "white",
          }}
        >
          {tag}
        </Button>
      </Link>
    </>
  );
};

export default CategoryTag;
