import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { useState } from "react";

const SearchBar = () => {
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

  const [focus, setFocus] = useState(false);

  return (
    <InputGroup className={`${focus ? "scale-105" : ""} transition-all`}>
      <Input
        rounded={"full"}
        borderColor={"gray.300"}
        backgroundColor={useColorModeValue("white")}
        focusBorderColor="primary.400"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={text}
      />
      <InputRightElement width={"4.5rem"} paddingRight={"1"}>
        <IconButton
          h="1.75rem"
          size="md"
          rounded={"full"}
          icon={<BiSearch />}
          color="white"
          bg={`${focus ? "primary.400" : "gray.300"}`}
          _hover={{
            bg: `${focus ? "primary.400" : ""}`,
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
