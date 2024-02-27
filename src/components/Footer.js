import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";
import FooterNav from "./FooterNav";
import Socialmedia from "./Socialmedia";
import { FaXTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";

const Footer = () => {
  const servicesItems = [
    { text: "AIR FREIGHT", url: "/service/air-freight" },
    { text: "SEA FREIGHT", url: "/service/sea-freight" },
    { text: "LAND FREIGHT", url: "/service/land-freight" },
    { text: "LOGISTICS MANAGEMENT", url: "/service/logistics-management" },
  ];
  const CompanyItems = [
    { text: "ABOUT US", url: "/about" },
    { text: "GET QUOTE", url: "/get-quote" },
    { text: "CONTACT US", url: "/contact" },
  ];
  const globexInfo = [
    { text: "+971 50 515 8826", url: "tel:+971 50 515 8826" },
    {
      text: "Business Village, Block B, Office 820, Port Saeed Deira,Dubai, UAE.",
    },
    {
      text: "info@globexuae.com",
      url: "mailto:info@globexuae.com",
    },
  ];

  const socialmedias = [
    {
      icon: FaSquareFacebook,
      url: "#",
    },
    {
      icon: FaLinkedin,
      url: "#",
    },
    {
      icon: FaXTwitter,
      url: "#",
    },
  ];

  return (
    <Flex
      as="footer"
      justifyContent="center"
      pt={{ base: "0", md: "8" }}
      bgColor="#021824"
      color="white"
      direction="column"
    >
      <Grid
        templateColumns="1fr 1fr 1fr 1fr"
        gap="8"
        mx={{ md: "10", lg: "20" }}
        w="fit-content"
        display={{ base: "none", md: "grid" }}
      >
        <FooterNav heading="COMPANY" items={CompanyItems} />
        <FooterNav heading="OUR SERVICES" items={servicesItems} />
        <FooterNav heading="GLOBEX LOGISTICS" items={globexInfo} />
        <Socialmedia heading="FOLLOW US ON" items={socialmedias} />
      </Grid>

      {/* Footer Accordion */}
      <Flex
        w="full"
        direction="column"
        gap={3}
        display={{ base: "flex", md: "none" }}
      >
        <Accordion allowToggle>
          {/* COMPANY */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Heading
                    as="h6"
                    flex="1"
                    textAlign="left"
                    size="sm"
                    color="#E64A2F"
                  >
                    COMPANY
                  </Heading>
                  {isExpanded ? (
                    <FiMinus fontSize="12px" />
                  ) : (
                    <FiPlus fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <FooterNav items={CompanyItems} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* SERVICES */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Heading
                    as="h6"
                    flex="1"
                    textAlign="left"
                    size="sm"
                    color="#E64A2F"
                  >
                    OUR SERVICES
                  </Heading>
                  {isExpanded ? (
                    <FiMinus fontSize="12px" />
                  ) : (
                    <FiPlus fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <FooterNav items={servicesItems} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>

          {/* GLOBEX */}
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Heading
                    as="h6"
                    flex="1"
                    textAlign="left"
                    size="sm"
                    color="#E64A2F"
                  >
                    GLOBEX LOGISTICS LLC
                  </Heading>
                  {isExpanded ? (
                    <FiMinus fontSize="12px" />
                  ) : (
                    <FiPlus fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <FooterNav items={globexInfo} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        {/* SocialMedia */}
        <Stack>
          <Socialmedia heading="FOLLOW US ON" items={socialmedias} />
        </Stack>
      </Flex>

      {/* Copyright */}
      <Flex justifyContent="center" my={5}>
        <Text color="lightgray" fontSize={{ base: "xs", md: "sm" }}>
          Copyright © {new Date().getFullYear()} Globex Logistics LLC. All
          Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
