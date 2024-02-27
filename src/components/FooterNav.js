import React from "react";
import { List, ListItem, Link, Heading } from "@chakra-ui/react";

const FooterNav = ({ heading, items }) => {
  return (
    <List spacing={2} w="fit-content">
      <Heading
        as="h6"
        size={{ base: "sm", md: "sm", lg: "md" }}
        color="#E64A2F"
        mb={{ base: "0", md: "4" }}
        display={{ base: "none", md: "block" }}
      >
        {heading}
      </Heading>
      {items.map((item, index) => (
        <ListItem key={index} fontSize="sm">
          <Link _hover={{ color: "#E64A2F" }} href={item.url}>
            {item.text}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default FooterNav;
