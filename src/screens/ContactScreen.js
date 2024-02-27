import React from "react";
import ContactForm from "../components/ContactForm";
import {
  Image,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

import { GrMap } from "react-icons/gr";
import { BsTelephoneForward } from "react-icons/bs";
import { LiaFaxSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import Map from "../components/Map";

const ContactScreen = () => {
  return (
    <>
      <Stack direction="column" textAlign="center" my="10">
        <Heading as="h2" size="lg" fontWeight="semibold">
          CONTACT US
        </Heading>
        <Text fontStyle="italic" fontSize={{ base: "sm", sm: "md" }}>
          Are you looking for a best service? We want to hear from you!
        </Text>
      </Stack>

      <Grid
        templateColumns={{ base: "1fr", md: "2fr 2fr" }}
        templateRows={{ base: "auto", md: "none" }}
        mx={{ base: "4%", md: "8%" }}
        border="1px solid rgba(209, 213, 219, 0.3)"
        borderRadius="xl"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        <Flex direction="column" gap={3}>
          <Heading textAlign="center" as="h3" size="md" mt="5">
            Head Office
          </Heading>
          <Stack
            direction="column"
            spacing={3}
            fontSize={{ base: "sm", md: "md" }}
            p="6"
          >
            {/* Address */}
            <Flex gap={5}>
              <Icon boxSize={6} as={GrMap} color="#E64A2F" />
              <Text>
                Business Village, Block B, Office 820, Port Saeed Deira,
                <b>Dubai, UAE.</b>
              </Text>
            </Flex>

            {/* Telephone */}
            <Flex gap={5}>
              <Icon boxSize={6} as={BsTelephoneForward} color="#E64A2F" />
              <Text>
                <b>Tel:</b> +971 50 515 8826
              </Text>
            </Flex>

            {/* Fax */}
            {/* <Flex gap={5}>
              <Icon boxSize={7} as={LiaFaxSolid} color="#E64A2F" />
              <Text>
                <b>Fax:</b> 971 4 268 34 04
              </Text>
            </Flex> */}

            {/* Email */}
            <Flex gap={5}>
              <Icon boxSize={6} as={MdOutlineEmail} color="#E64A2F" />
              <Text>
                <b>Email:</b> info@globexuae.com
              </Text>
            </Flex>
          </Stack>
        </Flex>

        {/* ContactForm */}
        <ContactForm />
      </Grid>

      {/* Map */}

      <Map />
    </>
  );
};

export default ContactScreen;
