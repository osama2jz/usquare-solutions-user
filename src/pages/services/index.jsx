import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import Projects from "../home/Projects";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import s5 from "../../assets/s5.svg";
import { useStyles } from "./styles";
import Content from "./Content";

const Services = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Box>
      <Content />
      <Projects />
      <Title order={2} align="center" color={theme.colors.blue} fw={400}>
        WE BUILD CUSTOMER TRUST
      </Title>
      <Title order={4} align="center" fw={100}>
        Our Customer Trust us Because we are Providing
      </Title>
      <Flex gap="lg" justify={"center"} p="xl" wrap={"wrap"}>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s1} className={classes.s} width={"50px"} />
          <Text align="center">Customized Development</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s2} className={classes.s} width={"50px"} />
          <Text align="center">Unique Attractive Design</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s3} className={classes.s} width={"50px"} />
          <Text align="center">True Responsiveness</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s4} className={classes.s} width={"50px"} />
          <Text align="center">Testing for Perfection</Text>
        </Stack>
        <Stack spacing={"sm"} w={"140px"}>
          <Image fit="cover" src={s5} className={classes.s} width={"50px"} />
          <Text align="center">Time to Market</Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Services;
