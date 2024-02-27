import {
  Textarea,
  FormControl,
  Input,
  Spacer,
  Heading,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { React, useRef, useState } from "react";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";

const QuoteForm = () => {
  const form = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_r4tt9ap", //YOUR_SERVICE_ID
        "template_ajyqrxk", //YOUR_TEMPLATE_ID
        form.current,
        "NkVnG6diObTobLk__" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          navigate("/");
          toast({
            title: "Form Submitted",
            description: "We'll get back to you as soon as possible",
            status: "success",
            duration: 2000,
          });
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <Flex
      direction="column"
      w="full"
      alignItems="center"
      justifyContent="center"
      py="5"
    >
      {/* <Heading textAlign="left" as="h3" size="lg" fontWeight="semibold">
        Fill the details Below
      </Heading> */}
      <FormContainer width={{ base: "xs", md: "sm", lg: "xl" }}>
        <form ref={form} onSubmit={sendEmail}>
          {/* NAME */}
          <FormControl id="name" isRequired>
            <Input type="text" name="from_name" placeholder="Enter name" />
          </FormControl>
          <Spacer h="6" />

          {/* Email  */}
          <FormControl id="email" isRequired>
            <Input
              type="email"
              name="to_email"
              placeholder="Enter email address"
            />
          </FormControl>
          <Spacer h="6" />

          {/* Phone  */}
          <FormControl id="phone" isRequired>
            <Input type="tel" name="phone" placeholder="Phone Number" />
          </FormControl>
          <Spacer h="6" />

          {/* Cargo Type */}
          <FormControl id="cargotype" isRequired>
            <Input type="text" name="cargotype" placeholder="Cargo Type" />
          </FormControl>
          <Spacer h="6" />

          {/*Country Origin*/}
          <FormControl id="country" isRequired>
            <Input type="text" name="country" placeholder="Country Origin" />
          </FormControl>
          <Spacer h="6" />

          {/*Destination*/}
          <FormControl id="destination" isRequired>
            <Input type="text" name="destination" placeholder="Destination" />
          </FormControl>
          <Spacer h="6" />

          {/*Quantity*/}
          <FormControl id="quantity" isRequired>
            <Input type="text" name="quantity" placeholder="Quantity" />
          </FormControl>
          <Spacer h="6" />

          {/*Weight*/}
          <FormControl id="weight" isRequired>
            <Input type="text" name="weight" placeholder="Weight" />
          </FormControl>
          <Spacer h="6" />

          {/*Width*/}
          <FormControl id="width">
            <Input type="text" name="width" placeholder="Width" />
          </FormControl>
          <Spacer h="6" />

          {/*Height*/}
          <FormControl id="height">
            <Input type="text" name="height" placeholder="Height" />
          </FormControl>
          <Spacer h="6" />

          {/*Message */}
          <FormControl id="message">
            <Textarea type="text" name="message" placeholder="Message" />
          </FormControl>
          <Spacer h="6" />

          <Button
            isLoading={isLoading}
            loadingText="Sending"
            type="submit"
            color="white"
            bgColor="#E64A2F"
            _hover={{ bgColor: "#021824" }}
            w="full"
          >
            SUBMIT
          </Button>
        </form>
      </FormContainer>
    </Flex>
  );
};

export default QuoteForm;
