import {
  Flex,
  Text,
  Box,
  Grid,
  Heading,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Tabbed from "../components/Tabbed";
import ServicesGrid from "../components/ServicesGrid";
import Gallery from "../components/Gallery";
import { services } from "../data/companyInfo";
import Slider from "../components/Slider";
import { Fade } from "react-awesome-reveal";

const HomeScreen = () => (
  <>
    {/* Main Banner */}
    <Box
      bgImage="url('../assets/hero.jpg')"
      bgPosition="center"
      backgroundSize="100% 100%"
      w="full"
      h={{ base: "200px", md: "480px" }}
      display="flex"
      alignItems="center"
    >
      <Stack mx={{ base: "5", md: "10" }} spacing={8}>
        <Flex
          color="white"
          w={{ base: "xs", md: "md" }}
          gap={{ base: "4", md: "8" }}
          direction="column"
        >
          <Heading
            as="h1"
            size={{ base: "md", md: "4xl" }}
            fontWeight="semibold"
          >
            Best in Class
          </Heading>
          <Text fontSize={{ base: "xs", md: "lg" }}>
            Professional service built on a foundation of extensive collective
            expertise.
          </Text>
        </Flex>
        <Link
          as={RouterLink}
          to="/about"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "auto" });
          }}
        >
          <Button
            w="fit-content"
            color="white"
            _hover={{ bgColor: "#E64A2F" }}
            variant="outline"
            size={{ base: "xs", md: "md" }}
            px="8"
          >
            ABOUT US
          </Button>
        </Link>
      </Stack>
    </Box>

    {/* Tab content */}
    <Fade duration="1500" triggerOnce>
      <Tabbed />
    </Fade>
    {/* Our Services Grid */}
    <Fade duration="1500" triggerOnce>
      <Flex
        direction="column"
        bgColor="#F8F9FA"
        py="8"
        bgImage="url('../assets/gallery/img11.jpg')"
        bgPosition="center"
        backgroundSize="100% 100%"
        color="white"
      >
        <Stack spacing="2" textAlign="center" mb="10">
          <Heading size="xl">Our Services</Heading>
          <Text fontSize="md">
            We offer a wide range of personalized and professional services for
            you!
          </Text>
        </Stack>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: "4", md: "8" }}
          justifyItems="center"
          mx={{ base: "10px", md: "30", lg: "100" }}
        >
          {services.slice(0, 6).map((service) => (
            <ServicesGrid key={service.id} service={service} />
          ))}
        </Grid>
        <Flex justifyContent="center" mt="10">
          <Link
            as={RouterLink}
            to="/services"
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "auto" });
            }}
          >
            <Button
              w="fit-content"
              bgColor="#E64A2F"
              color="white"
              _hover={{ bgColor: "#021824" }}
              size={{ base: "xs", sm: "md" }}
              px="8"
            >
              VIEW ALL SERVICES
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Fade>
    {/* Gallery  */}
    <Fade duration="1500" triggerOnce>
      <Flex direction="column" gap={2} my="10">
        <Stack spacing="2" textAlign="center" mb="10">
          <Heading size="xl">Our Gallery</Heading>
          <Text fontSize="md">Photos from Shipping and Logistics</Text>
        </Stack>
        <Gallery />
      </Flex>
    </Fade>
    {/* Map Banner */}
    <Fade duration="1500" triggerOnce>
      <Box
        bgImage="url('../assets/map.jpg')"
        bgPosition="center"
        backgroundSize="100% 100%"
        w="full"
        h={{ base: "250px", md: "480px" }}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Stack mx={{ base: "2", md: "10" }}>
          <Flex
            color="white"
            w={{ base: "xs", md: "md" }}
            gap={{ base: "3", md: "5" }}
            direction="column"
            alignItems="flex-end"
          >
            <Heading
              as="h2"
              size={{ base: "sm", md: "xl" }}
              fontWeight="semibold"
            >
              Our Global Destinations
            </Heading>
            <Text
              fontSize={{ base: "2xs", md: "lg" }}
              textAlign={{ base: "right", md: "right", lg: "left" }}
            >
              Navigate the world effortlessly.
              <br /> Choose us for reliable logistics to any destination.
            </Text>
            <Link
              as={RouterLink}
              to="/get-quote"
              onClick={() => {
                window.scrollTo({ top: "0", behavior: "auto" });
              }}
              _hover={{ textDecoration: "none" }}
            >
              <Button
                display={{ base: "none", md: "block" }}
                w="fit-content"
                bgColor="#E64A2F"
                color="white"
                _hover={{ bgColor: "#021824" }}
                variant="outline"
                size="md"
                px="8"
                mt="3"
              >
                CONTACT A DESTINATION REPRESENTATIVE
              </Button>

              {/* Mobile Button */}
              <Button
                display={{ base: "block", md: "none" }}
                w="fit-content"
                bgColor="#E64A2F"
                color="white"
                _hover={{ bgColor: "#021824" }}
                variant="outline"
                size="xs"
                px="8"
                mt="2"
              >
                CONTACT
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Fade>

    {/* Partners */}
    {/* <Fade duration="1500" triggerOnce>
      <Flex direction="column" gap={2} my="10">
        <Stack spacing="2" textAlign="center" mb="10">
          <Heading size="xl">Our Prestigious Partners</Heading>
        </Stack> */}

    {/* Logo Slider */}
    {/* <Slider />
      </Flex>
    </Fade> */}
  </>
);

export default HomeScreen;
