import React from "react";
import { Flex, Heading, Link, Icon } from "@chakra-ui/react";
import { FaXTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";

const Socialmedia = ({ heading, items }) => {
  console.log(items);

  return (
    <Flex direction="column" gap={5} alignItems="center">
      <Heading
        as="h6"
        size={{ base: "sm", md: "sm", lg: "md" }}
        color="#E64A2F"
      >
        {heading}
      </Heading>
      <Flex gap="5">
        {items.map((item, index) => (
          <Link to={item.url} key={index}>
            <Icon _hover={{ color: "#E64A2F" }} boxSize={7} as={item.icon} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Socialmedia;
