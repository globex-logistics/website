import { Image, Stack, Heading, Text, Grid, Img, Box } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const AboutScreen = () => {
  return (
    <>
      {/* Quote Banner */}
      <Image
        src="../assets/about-us/aboutbanner.jpg"
        h={{ base: "200px", md: "400px" }}
      />

      <Box mx={{ base: "4%", md: "8%" }} textAlign="justify" my="10">
        <Text textAlign="justify">
          Established in the year 2023, with its headquarters in the United Arab
          Emirates, Globex Logistics has since proclaimed itself to be one of
          the most reputed logistic companies, offering a totally integrated
          trade service both locally and globally.
        </Text>
        {/* Our Team */}
        <Fade duration="1500" triggerOnce>
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 3fr" }}
            templateRows={{ base: "auto", md: "none" }}
            alignItems="center"
            justifyItems="center"
            w="full"
            my="10"
          >
            <Image
              src="../assets/about-us/team.png"
              h={{ base: "250px", md: "300px", lg: "350px" }}
            />
            <Stack mt={{ base: "4", md: "0" }}>
              <Heading
                as="h3"
                size={{ base: "md", md: "lg" }}
                textAlign="center"
                letterSpacing="widest"
                color="#E64A2F"
              >
                OUR TEAM
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Our team of{" "}
                <span style={{ color: "#E64A2F", fontWeight: "bold" }}>
                  {" "}
                  'hand-picked'{" "}
                </span>{" "}
                experienced staff is dedicated to delivering superior,
                personalized customer service levels required by our customers.{" "}
                <br /> <br />
                Whether you are a multinational organization or an individual,
                our team responds professionally and quickly to ensure that your
                business is managed to your utmost satisfaction. Within the
                team, we have the ability to speak many languages, including
                English, Hindi, Marathi, and Arabic. We are happy to offer our
                assistance to our clients who may need to communicate with any
                of the above countries or cultures. <br /> <br />
                We promote an open atmosphere where our team can develop their
                skills and recognize and realize their own potential.
              </Text>
            </Stack>
          </Grid>
        </Fade>

        {/* Our Mission */}
        <Fade duration="1500" triggerOnce>
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 2fr" }}
            templateRows={{ base: "auto", md: "none" }}
            alignItems="center"
            justifyItems="center"
            w="full"
            my="10"
          >
            <Image
              display={{ base: "block", md: "none" }}
              src="../assets/about-us/mission.png"
              h={{ base: "250px", md: "300px", lg: "350px" }}
            />
            <Stack>
              <Heading
                as="h3"
                size={{ base: "md", md: "lg" }}
                textAlign="center"
                letterSpacing="widest"
                color="#E64A2F"
              >
                MISSION STATEMENT
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                To succeed in building a profitable company for the ultimate
                benefits of our customers, staff and shareholders, through
                diligence, attention to detail and skill of our staff, will be
                the{" "}
                <span style={{ color: "#E64A2F", fontWeight: "bold" }}>
                  "best in class"
                </span>{" "}
                and the envy of our customers.
              </Text>
            </Stack>

            <Image
              display={{ base: "none", md: "block" }}
              src="../assets/about-us/mission.png"
              h={{ base: "250px", md: "300px", lg: "350px" }}
            />
          </Grid>
        </Fade>

        {/* Our Philosophy */}
        <Fade duration="1500" triggerOnce>
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 3fr" }}
            templateRows={{ base: "auto", md: "none" }}
            alignItems="center"
            justifyItems="center"
            w="full"
            my="10"
          >
            <Image
              src="../assets/about-us/phil.png"
              h={{ base: "300px", md: "400px" }}
            />
            <Stack mt={{ base: "4", md: "0" }}>
              <Heading
                as="h3"
                size={{ base: "md", md: "lg" }}
                textAlign="center"
                letterSpacing="widest"
                color="#E64A2F"
              >
                OUR PHILOSOPHY
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                At Globex Logistics we believe that delivering what the customer
                wants, when they want it, in a cost effective manner is not just
                achievable but essential. <br /> <br />
                We believe that consistent and reliable service allied to robust
                cost management is the key to success. We understand the drivers
                that dictate the needs of our clients and we design solutions
                that meet those requirements. <br /> <br />
                Recent mega consolidations within our industry have led many
                customers to feel that their needs and requirements are being
                neglected. The emergence of the 'one stop shop' with its 'one
                size fits all' solutions and generic customer service is not
                conducive to top class customer care.
                <br /> <br />
                Efficient cost management is an essential process for any
                organization. At Globex Logistics we constantly monitor the
                market. Economic pressures vary throughout the year and this can
                mean that rates can increase or decrease accordingly. We work
                closely with our Clients & Suppliers to manage these changes and
                can offer savings to our customers based on region, mode or a
                host of other factors.
                <br /> <br />
                We strive to be the{" "}
                <span style={{ color: "#E64A2F", fontWeight: "bold" }}>
                  {" "}
                  'supplier of choice'{" "}
                </span>
                to those organizations that require consistency of delivery and
                high levels of personalized customer care.
              </Text>
            </Stack>
          </Grid>
        </Fade>
      </Box>
    </>
  );
};

export default AboutScreen;
