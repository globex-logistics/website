import {
  Box,
  TabList,
  Tabs,
  Tab,
  TabIndicator,
  TabPanel,
  TabPanels,
  Flex,
  Card,
  CardBody,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Tabbed = () => {
  return (
    <Box mx="auto" maxW={{ base: "95%", md: "800px" }} my="10">
      <Tabs isFitted color="grey" position="relative" variant="unstyled">
        <TabList>
          <Tab
            fontWeight="bold"
            fontSize={{ base: "xs", md: "md" }}
            _selected={{ color: "#021824" }}
          >
            About Globex Logistics
          </Tab>
          <Tab
            fontSize={{ base: "xs", md: "md" }}
            fontWeight="bold"
            _selected={{ color: "#021824" }}
          >
            Why choose Globex
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#E64A2F"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="unstyled"
              align="center"
            >
              <Image
                w={{ base: "200px", md: "xs" }}
                src="../assets/about1.png"
                alt="About Globex Logistics"
              />

              <Stack mx="8" w={{ base: "xs", md: "md" }} spacing={15}>
                <CardBody color="#021824" mt="4">
                  <Heading
                    as="h2"
                    size={{ base: "sm", md: "lg" }}
                    fontWeight="semibold"
                  >
                    Globex Logistics: Innovating Excellence in Solutions
                  </Heading>
                  <Text
                    py="2"
                    textAlign="justify"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    Globex Logistics LLC Was established in the year 2023 with
                    its headquarters in the United Arab Emirates, since then
                    Globex has proclaimed to be one of the most reputed Logistic
                    Company, offering a totally integrated trade service both
                    locally and globally.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="unstyled"
              align="center"
            >
              <Image
                w={{ base: "200px", sm: "xs" }}
                src="../assets/about2.png"
                alt="About Globex Logistics"
              />

              <Stack mx="8" w={{ base: "xs", md: "md" }} spacing={15}>
                <CardBody color="#021824" mt="4">
                  <Heading
                    as="h2"
                    size={{ base: "sm", md: "lg" }}
                    fontWeight="semibold"
                  >
                    What Sets Us Apart!
                  </Heading>
                  <Text
                    py="2"
                    textAlign="justify"
                    fontSize={{ base: "xs", md: "sm" }}
                  >
                    Friendly and personalized services to every customer
                    independently. One contact for all your Logistic & Supply
                    chain Management. <br />
                    Own Transport fleet, so that we can meet very competitive
                    rates. Has an associate office at the UAE border, hence
                    immediate & personalized border clearance services of land
                    from UAE to all Middle East. Can facilitate the entire
                    service from freight forwarding to export logistics, Customs
                    Clearance, transportation, and warehousing storage.
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Tabbed;
