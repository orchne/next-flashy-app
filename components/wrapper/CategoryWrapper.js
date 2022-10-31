import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import React from "react";

const CategoryWrapper = (props) => {
  return (
    <>
      <Wrap spacing="18px" justify="center">
        {props.categoryList.map((category) => {
          return (
            <WrapItem key={category}>
              <Center mt="3" mb="3">
                {React.cloneElement(props.children, { tags: category })}
              </Center>
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
};

export default CategoryWrapper;
