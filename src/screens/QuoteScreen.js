import React from "react";
import QuoteForm from "../components/QuoteForm";
import {
  Stack,
  Heading,
  Text,
  Flex,
  Grid,
  Image,
  Link,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { FiPlus, FiMinus } from "react-icons/fi";

const QuoteScreen = () => {
  return (
    <>
      {/* Quote Banner */}
      <Image
        src="../assets/about-us/getquote.jpg"
        h={{ base: "200px", md: "400px" }}
      />

      <Stack direction="column" textAlign="center" my="5">
        <Heading as="h2" size="lg" fontWeight="semibold">
          Request a free quote today!
        </Heading>
      </Stack>

      <Grid
        templateColumns={{ base: "1fr", md: "2fr 3fr" }}
        templateRows={{ base: "auto", md: "none" }}
        mx={{ base: "5", md: "10", lg: "20" }}
        gap={{ base: "5", md: "10", lg: "20" }}
      >
        {/*QuoteForm */}
        <QuoteForm />
        <Flex direction="column" gap={14} my={{ base: "5", md: "10" }}>
          <Stack direction="column" spacing={3}>
            <Text>
              We Will get back to you within 24 hours. <br />
              Monday - Friday / 09:00 - 18:00 EST.
            </Text>
          </Stack>

          {/* Globex */}
          <Flex direction="column" gap={4}>
            <Stack spacing={5}>
              <Heading as="h3" size="lg" color="#E64A2F" fontWeight="semibold">
                Globex Logistics LLC
              </Heading>
              <Text>B/820, Port Saeed Deira,Dubai, UAE.</Text>
            </Stack>
            <Stack spacing={2}>
              <Text>
                Phone:{" "}
                <Link
                  _hover={{ textDecoration: "none" }}
                  href="tel:+971 50 515 8826"
                >
                  +971 50 515 8826
                </Link>
              </Text>
              <Text>
                Email:{" "}
                <Link
                  _hover={{ textDecoration: "none" }}
                  href="mailto:sales@globexuae.com"
                >
                  sales@globexuae.com
                </Link>
              </Text>
            </Stack>
          </Flex>

          {/* FAQs */}
          <Stack gap={5}>
            <Heading as="h3" size="md" fontWeight="semibold">
              Frequently asked Questions
            </Heading>
            <Accordion allowToggle>
              {/* Q1 */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Text fontWeight="semibold" flex="1" textAlign="left">
                        What information do I need to provide for an accurate
                        quote?
                      </Text>
                      {isExpanded ? (
                        <FiMinus fontSize="16px" />
                      ) : (
                        <FiPlus fontSize="16px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text>
                        To ensure an accurate quote, please provide details such
                        as the type of shipment, dimensions, weight, pickup, and
                        delivery locations. The more information you provide,
                        the more precise and tailored your quote will be.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              {/* Q2 */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Text fontWeight="semibold" flex="1" textAlign="left">
                        Are there any hidden fees or additional charges?
                      </Text>
                      {isExpanded ? (
                        <FiMinus fontSize="16px" />
                      ) : (
                        <FiPlus fontSize="16px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text>
                        No, transparency is our priority. The quote you receive
                        includes all relevant costs for the specified services.
                        There are no hidden fees, and we believe in providing
                        upfront and honest pricing.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              {/* Q3 */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Text fontWeight="semibold" flex="1" textAlign="left">
                        How long does it take to receive a quote?{" "}
                      </Text>
                      {isExpanded ? (
                        <FiMinus fontSize="16px" />
                      ) : (
                        <FiPlus fontSize="16px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text>
                        We strive to provide you with a quote as quickly as
                        possible. Typically, you can expect to receive a
                        response within 24-48 hours after submitting your
                        request.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              {/* Q4 */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Text fontWeight="semibold" flex="1" textAlign="left">
                        What sets your logistics services apart from others?
                      </Text>
                      {isExpanded ? (
                        <FiMinus fontSize="16px" />
                      ) : (
                        <FiPlus fontSize="16px" />
                      )}
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Text>
                        Our commitment to reliability, efficiency, and customer
                        satisfaction distinguishes us. We leverage advanced
                        technology, a global network, and a dedicated team to
                        ensure your shipments are handled with care and
                        delivered on time, every time.
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Stack>
        </Flex>
      </Grid>
    </>
  );
};

export default QuoteScreen;
