import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import contactus from "../../assets/contactUs.png";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import ContactForm from "../../components/ContactForm";
import contactus2 from "../../assets/contactus2.png";

const ContactUs = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 800px)");
  const { classes } = useStyles();
  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${contactus})`, width: "100%" }}
      >
        <Title>GET IN TOUCH</Title>
        <Title order={3}>Let us know how we can help you</Title>
      </Box>
      <SimpleGrid
        style={{ padding: !isMobile ? "10px" : "50px 220px" }}
        spacing={"xl"}
        breakpoints={[
          { minWidth: "xs", cols: 1 },
          { minWidth: "sm", cols: 2 },
          { minWidth: "lg", cols: 3 },
        ]}
      >
        <Stack>
          <Title className={classes.title} order={3}>
            Address
          </Title>
          <Text>
            Office No#17, 2nd Floor, Zaki Centre, I-8 Markaz I 8 Markaz I-8,
            Islamabad, Islamabad Capital Territory 44000
          </Text>
        </Stack>
        <Stack>
          <Title className={classes.title} order={3}>
            Contact Number
          </Title>
          <Text className={classes.contact}>+92 300 7171197</Text>
        </Stack>
        <Stack>
          <Title className={classes.title} order={3}>
            Email
          </Title>
          <Text>info@usquaresolutions.com</Text>
        </Stack>
      </SimpleGrid>
      <Flex
        className={classes.contactUsForm}
        wrap={isMobile ? "nowrap" : "wrap"}
        gap={!isMobile ? "20px" : "100px"}
      >
        <Image src={contactus2} w />
        <ContactForm />
      </Flex>
    </Box>
  );
};

export default ContactUs;
