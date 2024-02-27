import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Map = () => {
  return (
    <Flex mt="10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.0978085079489!2d55.326188569511196!3d25.257421311499876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cda192a2ea7%3A0x71a4bae5fbdac1ea!2sBusiness%20Village!5e0!3m2!1sen!2sin!4v1706851235419!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        iwd="0"
      ></iframe>
    </Flex>
  );
};

export default Map;
