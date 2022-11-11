import { Avatar, Button, HStack, Tag, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BsFillHeartFill } from "react-icons/bs";
import { GiCardDraw } from "react-icons/gi";

const PreviewCard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      onClick={() => setFlip(!flip)}
    >
      <ReactCardFlip isFlipped={flip} flipDirection="vertical">
        <div className="cursor-pointer w-[80vw] h-60 sm:w-[70vw] sm:h-60 md:w-[36vw] md:h-56 lg:w-[26vw] lg:h-52 2xl:w-[20vw] bg-primary-500 rounded-md flex justify-center items-center p-10 relative">
          <Text
            className="text-xl font-bold font-heading text-center text-background"
            noOfLines={[1, 2]}
          >
            Python Programming Fundamental
          </Text>
          <Tag
            className="absolute bottom-2 right-2"
            fontSize={"md"}
            colorScheme={"secondary"}
          >
            Programming
          </Tag>
          <p className="absolute top-2 left-2 text-3xl">😀</p>
        </div>

        <div className="cursor-pointer w-[80vw] h-60 sm:w-[70vw] sm:h-60 md:w-[36vw] md:h-56 lg:w-[26vw] lg:h-52 2xl:w-[20vw] bg-white shadow-lg border0 rounded-md flex justify-center items-center flex-col  gap-5">
          <HStack spacing={"20px"}>
            <HStack spacing={"10px"}>
              <BsFillHeartFill className="text-3xl text-primary-500 font-bold" />
              <Tag className="text-lg font-semibold text-background">
                10 Likes
              </Tag>
            </HStack>
            <HStack spacing={"10px"}>
              <GiCardDraw className="text-3xl text-primary-500" />
              <Tag className="text-lg font-semibold text-background">
                10 Cards
              </Tag>
            </HStack>
          </HStack>
          <HStack spacing={"10px"}>
            <Avatar
              size="md"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />
            <Tag className="text-lg font-semibold font-heading text-background">
              Ryan Florence
            </Tag>
          </HStack>
          <Button
            className="mt-5 lg:mt-0"
            size={"lg"}
            rounded="full"
            colorScheme={"primary"}
          >
            See Card
          </Button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default PreviewCard;
