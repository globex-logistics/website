import { useState, useRef, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Flex,
  Image,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  Button,
  CardHeader,
  Link,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { services } from "../data/companyInfo";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const ServiceGallery = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabListRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const tabWidth = isLargerThan768 ? 150 : 95;

  const handleTabChange = (index) => {
    setTabIndex(index);
    if (!isLargerThan768) {
      setScrollPosition(index * tabWidth);
    }
    // ;
  };

  const handlePrevTab = () => {
    setTabIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setScrollPosition((prevIndex) => Math.max(prevIndex - tabWidth, 0));
  };

  const handleNextTab = () => {
    const nextTabIndex = tabIndex + 1;

    if (tabIndex <= 7) {
      setTabIndex(nextTabIndex);
    }
    if (tabIndex < 7 && nextTabIndex < services.length) {
      setScrollPosition((prevIndex) =>
        Math.min(prevIndex + tabWidth, (nextTabIndex - 1) * tabWidth)
      );
    }
  };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        py={{ base: "5", md: "10" }}
        bgImage="url('../assets/gallery/img11.jpg')"
        bgPosition="center"
        backgroundSize="100% 100%"
      >
        <Heading size="lg" fontWeight="semibold" color="white">
          Our Services
        </Heading>
        <Flex w={{ base: "370px", md: "700px", lg: "900px" }} my={6}>
          <Button
            display={{ base: "none", md: "block" }}
            mt="8"
            onClick={handlePrevTab}
            leftIcon={<BiLeftArrow size="20px" />}
            bgColor="transparent"
            color="white"
            _hover={{
              bg: "transparent",
            }}
          ></Button>
          <Tabs
            variant="unstyled"
            overflow="hidden"
            color="white"
            index={tabIndex}
            onChange={handleTabChange}
            mx={{ base: "0", md: "3" }}
          >
            <TabList
              flexWrap="nowrap"
              textOverflow="ellipsis"
              transition="transform 0.3s ease"
              ref={tabListRef}
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {services.map((service, index) => (
                <Tab
                  _selected={{
                    bg: "rgba(255,255,255,0.1)",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 3px;",
                    borderRadius: "5px",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <Flex
                    w={{ base: "90px", md: "120px", lg: "150px" }}
                    direction="column"
                    gap={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      src={service.whiteicon}
                      boxSize={{ base: "30px", md: "50px" }}
                    />
                    <Text fontSize="xs">{service.name}</Text>
                  </Flex>
                </Tab>
              ))}
            </TabList>

            {/* TabContent */}
            <TabPanels>
              {services.map((service, index) => (
                <TabPanel my={35}>
                  {/* Individual Card */}
                  <Card
                    color="white"
                    direction={{ base: "column", sm: "row" }}
                    variant="unstyled"
                    bg="transparent"
                    alignItems="center"
                  >
                    <Image
                      objectFit="cover"
                      w={{ base: "100%", md: "250px", lg: "300px" }}
                      h={{ base: "200px", md: "200px", lg: "200px" }}
                      src={service.image}
                      alt={service.name}
                    />

                    <Stack
                      spacing={6}
                      px={{ base: "0", md: "20px", lg: "50" }}
                      py={{ base: "5", md: "0" }}
                    >
                      <CardHeader>
                        <Heading size="lg" fontWeight="semibold">
                          {service.name}
                        </Heading>
                      </CardHeader>
                      <CardBody h="fit-content">
                        <Text
                          textAlign="justify"
                          fontSize="sm"
                          noOfLines="10"
                          style={{ hyphens: "auto" }}
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        ></Text>
                      </CardBody>
                      <Link href={`/service/${service.urlName}`}>
                        <Button
                          variant="link"
                          colorScheme="white"
                          rightIcon={
                            <Icon
                              as={MdOutlineKeyboardArrowRight}
                              boxSize={5}
                              mt={0.5}
                            />
                          }
                        >
                          LEARN MORE
                        </Button>
                      </Link>
                    </Stack>
                  </Card>
                  {/* Individual Card */}
                </TabPanel>
              ))}
            </TabPanels>
            {/* TabContent End */}
          </Tabs>
          <Button
            display={{ base: "none", md: "block" }}
            mt="8"
            onClick={handleNextTab}
            rightIcon={<BiRightArrow size={20} />}
            bgColor="transparent"
            color="white"
            _hover={{
              bg: "transparent",
            }}
          ></Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ServiceGallery;
