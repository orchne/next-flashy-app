import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry, email is required")
        .email("This is not a valid email"),
      password: Yup.string().required("Sorry, password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("background")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} fontFamily={"heading"}>
            <span className="text-primary-400">Sign in</span> to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to start create and <Link href={"/"}>browse flashcard</Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={4}>
            <FormControl
              id="email"
              isInvalid={formik.errors.email && formik.touched["email"]}
            >
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password"
              isInvalid={formik.errors.password && formik.touched["password"]}
            >
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                {...formik.getFieldProps("password")}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link href={"/"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Divider />
            <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={"center"}>
                Dont Have an Account?{" "}
                <Link href={"/register"}>
                  <span className="text-blue-400 cursor-pointer hover:underline">
                    Register
                  </span>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
