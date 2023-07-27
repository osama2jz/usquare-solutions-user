import {
  Box,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import {
  BrandFacebook,
  BrandInstagram,
  ClockHour2,
  DeviceMobile,
  Mail,
  MapPin,
  Search,
} from "tabler-icons-react";
import { useStyles } from "./styles";

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.footer}>
      <SimpleGrid
        spacing={"xl"}
        breakpoints={[
          { minWidth: "xs", cols: 1 },
          { minWidth: "sm", cols: 2 },
          { minWidth: "lg", cols: 4 },
        ]}
      >
        <Stack>
          <Title className={classes.title} order={3}>
            USQUARE SOLUTIONS
          </Title>
          <Divider color="rgb(255, 255, 255,0.1)" />
          <Text>
            USQUARE Solutions is an IT Solution Provider Company having superb
            expertise in all aspects of Internet Services
          </Text>
          <Group>
            <BrandFacebook />
            <BrandInstagram />
          </Group>
        </Stack>
        <Stack>
          <Title className={classes.title} order={3}>
            Contact Info
          </Title>
          <Divider color="rgb(255, 255, 255,0.1)" />
          <Text className={classes.contact}>
            <DeviceMobile />
            +92 300 7171197
          </Text>
          <Text className={classes.contact}>
            <Mail />
            info@usquaresolutions.com
          </Text>
          <Text className={classes.contact}>
            <MapPin style={{ alignSelf: "flex-start" }} width={"50px"} />
            Office No#17, 2nd Floor, Zaki Centre, I-8 Markaz I 8 Markaz I-8,
            Islamabad, Islamabad Capital Territory 44000
          </Text>
          <Text className={classes.contact}>
            <ClockHour2 />
            Mon - Fri: 09:00 AM - 09:00 PM
          </Text>
        </Stack>
        <Stack>
          <Title className={classes.title} order={3}>
            Latest Info
          </Title>
          <Divider color="rgb(255, 255, 255,0.1)" />
          <Text>
            We deliver modern design with clean lines and structure for a wide
            variety of content, exactly how a business design should be.
          </Text>
        </Stack>
        <Stack>
          <Title className={classes.title} order={3}>
            Newsletter
          </Title>
          <Divider color="rgb(255, 255, 255,0.1)" />
          <TextInput
            rightSection={<Search className={classes.searchIcon} />}
            placeholder="Enter your email here"
          />
          <Text>
            Get Latest News and promotions Letters direct in your inbox!
          </Text>
        </Stack>
      </SimpleGrid>
      <Divider color="rgb(255, 255, 255,0.1)" w={"100%"} />
      <Text align="center">
        {new Date().getFullYear()} USQUARE Solutions. All Rights reserved
      </Text>
    </Box>
  );
};

export default Footer;
