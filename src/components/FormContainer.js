import { Flex } from "@chakra-ui/react";

const FormContainer = ({ children, width = "md" }) => {
  return (
    <Flex direction="column" p="6" width={width}>
      {children}
    </Flex>
  );
};

export default FormContainer;
