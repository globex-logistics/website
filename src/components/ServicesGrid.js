import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Button,
  Stack,
  Flex,
  Icon,
  Divider,
  Link,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ServicesGrid = ({ service }) => {
  return (
    <>
      <Card
        maxW="sm"
        variant="unstyled"
        align="center"
        p={3}
        color="white"
        bg="rgba(255,255,255,0.1)"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 6px;"
        border="1px solid rgba(255,255,255,0.05)"
        backdropFilter="blur(10px)"
        WebkitBackdropFilter="blur(10px)"
      >
        <CardBody>
          <Flex justifyContent="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              borderRadius="full"
            >
              <Image
                boxSize={{ base: "70px", md: "100px", lg: "150px" }}
                src={service.icon}
                m={{ base: "0", md: "15", lg: "30" }}
              />
            </Flex>
          </Flex>
          <Stack
            w={{ base: "140px", md: "3xs", lg: "xs" }}
            mt="6"
            spacing="3"
            textAlign="center"
          >
            <Heading size={{ base: "xs", md: "md" }} fontWeight="semibold">
              {service.name}
            </Heading>
            <Text
              noOfLines={3}
              fontSize={{ base: "2xs", sm: "sm" }}
              dangerouslySetInnerHTML={{ __html: service.content }}
            ></Text>
          </Stack>
        </CardBody>
        <CardFooter my={{ base: "2", md: "4" }}>
          <Link href={`/service/${service.urlName}`}>
            <Button
              colorScheme="white"
              variant="link"
              size={{ base: "xs", sm: "md" }}
              rightIcon={
                <Icon
                  as={MdOutlineKeyboardArrowRight}
                  boxSize={{ base: "3", sm: "5" }}
                  mt={0.5}
                />
              }
            >
              LEARN MORE
            </Button>
          </Link>
        </CardFooter>
        {/* <Divider width="150px" color="lightgray" orientation="horizontal" /> */}
      </Card>
    </>
  );
};

export default ServicesGrid;
