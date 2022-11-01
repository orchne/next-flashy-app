import { Center, Wrap, WrapItem, Container } from "@chakra-ui/react";
import React from "react";

const CategoryWrapper = (props) => {
  return (
    <>
      {/* <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center"> */}
      <Wrap spacingX="18px" spacingY={"2px"} justify="center" mt={"20px"}>
        {props.categoryList.map((category) => {
          return (
            <WrapItem key={category}>
              <Center mb="3">
                {React.cloneElement(props.children, { tags: category })}
              </Center>
            </WrapItem>
          );
        })}
      </Wrap>
      {/* </div> */}
    </>
  );
};

export default CategoryWrapper;
