import { Button, Flex, IconButton } from "@chakra-ui/react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

const Emoji = ({ handleValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        <Flex>
          <BsFillEmojiSmileFill color="gray" />{" "}
          <span className="ml-1">Add Icon</span>
        </Flex>
      </Button>
      {open && (
        <Fade duration={"100"}>
          <Flex position={"absolute"} gap={"3"} marginTop={3}>
            <EmojiPicker onEmojiClick={handleValue} />
            <IconButton
              aria-label="Search database"
              icon={<IoMdClose />}
              bg={"red.400"}
              _hover={{
                bg: "red.400",
              }}
              onClick={() => setOpen(!open)}
              color={"white"}
            />
          </Flex>
        </Fade>
      )}
    </>
  );
};

export default Emoji;
