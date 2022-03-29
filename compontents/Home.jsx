import { Box, Heading, Container, Text, Stack, Center } from "@chakra-ui/react";

import Search from "../compontents/Search";
export default function Home() {
  return (
    <>
      <Container maxW={"3xl"} minH={"100vh"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pt={"150px"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Search Your{" "}
            <Text as={"span"} color={"#ED8936"}>
              Project
            </Text>
          </Heading>
          <Center width={"full"}>
            <Search></Search>
          </Center>
        </Stack>
      </Container>
    </>
  );
}
