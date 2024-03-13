import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const ErrorScreen = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
      gap={{ base: "5", md: "0" }}
      justifyContent="center"
      alignItems="center"
      my={{ base: "5", md: "10" }}
    >
      <Image
        src="../assets/all services.png"
        display={{ base: "block", md: "none" }}
      />
      <Flex mx="10" direction="column" gap="5">
        <Heading fontSize={{ base: "2rem", md: "3rem" }}>
          <span style={{ color: "#E64A2F" }}> Sorry</span>, Page Not Found
        </Heading>
        <Text>
          This might be because you have typed the web address incorrectly, or
          the page you were looking for may have been moved, updated or deleted.
          Please use one of the links below.
        </Text>
        <Link
          as={RouterLink}
          to="/"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "auto" });
          }}
        >
          <Button
            w="fit-content"
            bgColor="#E64A2F"
            color="white"
            _hover={{ bgColor: "#021824" }}
            size="md"
            px="8"
          >
            GO TO HOMEPAGE
          </Button>
        </Link>
      </Flex>
      <Image
        src="../assets/all services.png"
        display={{ base: "none", md: "block" }}
      />
    </Grid>
  );
};

export default ErrorScreen;
