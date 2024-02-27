import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { services } from "../data/companyInfo";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <Marquee speed="80">
      {services.map((service, index) => (
        <Image
          h={[30, 50, 70]}
          mx="10"
          objectFit="contain"
          key={index}
          src={service.icon}
          alt={`Logo ${index + 1}`}
        />
      ))}
    </Marquee>
  );
};

export default Slider;
