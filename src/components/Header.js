import {
  Box,
  Flex,
  Link,
  Image,
  Icon,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MdMenu, MdCall, MdClose } from "react-icons/md";
import SingleMenuItem from "./SingleMenuItem";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuItemClick = () => {
    onClose(); // Close the drawer when a menu item is clicked
  };

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      wrap="wrap"
      py="2"
      px={{ base: "4", md: "8" }}
      w="full"
      bgColor="white"
      pos="fixed"
      zIndex="9999"
      top="0"
      left="0"
      borderBottom="0.1px solid lightgray"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 2px"
    >
      {/* Drawer Icon */}
      <Box display={{ base: "block", md: "none" }}>
        {isOpen ? (
          <Icon as={MdClose} boxSize={6} onClick={handleMenuItemClick} />
        ) : (
          <Icon as={MdMenu} boxSize={6} onClick={onOpen} />
        )}

        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody mt="110px" px="4">
              <Flex
                direction="column"
                gap="3"
                fontSize="lg"
                fontWeight="semibold"
              >
                <Link
                  href="/about"
                  onClick={handleMenuItemClick}
                  _hover={{ textDecoration: "none" }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/services"
                  onClick={handleMenuItemClick}
                  _hover={{ textDecoration: "none" }}
                >
                  SERVICES
                </Link>
                <Link
                  href="/contact"
                  onClick={handleMenuItemClick}
                  _hover={{ textDecoration: "none" }}
                >
                  CONTACT
                </Link>
                <Link
                  href="/get-quote"
                  onClick={handleMenuItemClick}
                  _hover={{ textDecoration: "none" }}
                >
                  GET QUOTE
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* Logo */}
      <Link
        as={RouterLink}
        to="/"
        color="whiteAlpha.800"
        fontWeight="bold"
        letterSpacing="wide"
        _hover={{ textDecor: "none", color: "white" }}
        px="2"
        onClick={() => {
          window.scrollTo({ top: "0", behavior: "smooth" });
        }}
      >
        <Image
          objectFit="fill"
          h={{ base: "80px", md: "100px" }}
          w={{ base: "100px", md: "140px" }}
          src="../assets/logo.png"
          alt="logo"
        />
      </Link>

      {/* Links */}
      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "400px", lg: "550px" }}
        justifyContent="space-evenly"
      >
        <SingleMenuItem
          label="ABOUT US"
          url="/about"
          onClick={handleMenuItemClick}
        />
        <SingleMenuItem
          label="SERVICES"
          url="/services"
          onClick={handleMenuItemClick}
        />
        <SingleMenuItem
          label="CONTACT"
          url="/contact"
          onClick={handleMenuItemClick}
        />
        <SingleMenuItem
          label="GET QUOTE"
          url="/get-quote"
          onClick={handleMenuItemClick}
        />
      </Box>

      {/* Phone Number */}
      <Box display={{ base: "none", md: "none", lg: "block" }}>
        <SingleMenuItem
          icon={<Icon as={MdCall} mr="2" boxSize={5} />}
          label="+971 50 515 8826"
          url="tel:+971 50 515 8826"
        />
      </Box>

      {/* Responsive Call */}
      <Box display={{ base: "block", md: "block", lg: "none" }}>
        <SingleMenuItem
          label="CALL"
          icon={<Icon as={MdCall} mr="2" boxSize={4} />}
          url="tel:+971 50 515 8826"
        />
      </Box>
    </Flex>
  );
};

export default Header;
