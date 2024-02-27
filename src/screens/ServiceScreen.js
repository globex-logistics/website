import React from "react";
import { services } from "../data/companyInfo";
import { useParams } from "react-router-dom";
import { Image, Text, Stack, Heading } from "@chakra-ui/react";

const ServiceScreen = () => {
  const { urlName } = useParams();
  const service = services.find((service) => service.urlName === urlName);

  return (
    <>
      {/*Banner */}
      <Image
        objectFit="cover"
        src={service.image}
        h={{ base: "200px", md: "400px" }}
      />

      <Stack
        direction="column"
        textAlign="justify"
        mx={{ base: "5", md: "20" }}
        my="5"
      >
        <Heading
          fontFamily="Poppins, sans-serif"
          fontSize={{ base: "2xl", md: "4xl" }}
          as="h2"
          my={{ base: "2", md: "5" }}
          size="lg"
          textAlign="center"
          fontWeight="semibold"
        >
          {service.name.toUpperCase()}
        </Heading>
        <Text
          fontSize={{ base: "2xs", md: "md" }}
          dangerouslySetInnerHTML={{ __html: service.content }}
        ></Text>
      </Stack>
    </>
  );
};

export default ServiceScreen;
