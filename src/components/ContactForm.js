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

const ContactForm = () => {
  const form = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ici5pwj", //YOUR_SERVICE_ID
        "template_75olzm5", //YOUR_TEMPLATE_ID
        form.current,
        "lohQWJmeRpbiliNTV" //YOUR_PUBLIC_KEY
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
      <Heading textAlign="left" as="h3" size="md">
        General Enquiry
      </Heading>
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

          {/* Subject */}
          <FormControl id="subject" isRequired>
            <Input type="text" name="subject" placeholder="Subject" />
          </FormControl>
          <Spacer h="6" />

          {/*Message */}
          <FormControl id="message" isRequired>
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

export default ContactForm;
