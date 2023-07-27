import {
  Box,
  Flex,
  Stack,
  Text,
  Title,
  useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import ContactForm from "../../components/ContactForm";
import { useStyles } from "./styles";

const LetsTalk = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      className={classes.WhyChooseUs}
      wrap={isMobile ? "nowrap" : "wrap"}
      gap={!isMobile ? "20px" : "100px"}
    >
      <Stack spacing={"xl"}>
        <Title color={theme.colors.blue} fw={400}>
          LET'S TALK
        </Title>
        <Title order={3} fw={300}>
          Let's talk with our Team
        </Title>
        <Text>
          Have some Queries? Our Team is happy to answer your queries. Fill out
          the form and we'll be in touch as soon as possible.
        </Text>
        <Flex
          align={"flex-start"}
          gap={"md"}
          wrap={isMobile ? "nowrap" : "wrap"}
          justify={"center"}
        >
          <Box className={classes.counter}>
            <Text fz={30} color={theme.colors.blue}>
              08
            </Text>
            <Text fz={"sm"}>Years of Operations</Text>
          </Box>
          <Box className={classes.counter}>
            <Text fz={30} color={theme.colors.blue}>
              250
            </Text>
            <Text fz={"sm"}>Completed Projects</Text>
          </Box>
          <Box className={classes.counter}>
            <Text fz={30} color={theme.colors.blue}>
              250
            </Text>
            <Text fz={"sm"}>Loyal Clients</Text>
          </Box>
        </Flex>
      </Stack>
      <ContactForm />
    </Flex>
  );
};

export default LetsTalk;
