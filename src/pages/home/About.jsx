import { Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import img from "../../assets/home2.png";
import { useStyles } from "./styles";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import about3 from "../../assets/about3.svg";
import { useMediaQuery } from "@mantine/hooks";

const About = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 800px)");

  return (
    <Flex className={classes.about} gap={"100px"}>
      {isMobile && <img src={img} width={"40%"} />}
      <Stack align="flex-end" className={classes.aboutSub} spacing={"xl"}>
        <Title align="center" color={theme.colors.blue} fw={400}>
          ABOUT US
        </Title>
        <Text>
          We provide value solutions to our clients, and build applications that
          are tailored to meet the specefic needs using the technological
          models.
        </Text>
        <Flex align={"flex-start"} gap={"md"}>
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Quality Products
            </Title>
            <Text fz="sm">
              We beleive in Software Quality that is essential to deliver the
              product on time.
            </Text>
          </Stack>
          <img src={about1} width={"40px"} />
        </Flex>
        <Flex align={"flex-start"} gap={"md"}>
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Timely work
            </Title>
            <Text fz="sm">
              We always deploying the Project on time with all completed
              requirements.
            </Text>
          </Stack>
          <img src={about2} width={"40px"} />
        </Flex>
        <Flex align={"flex-start"} gap={"md"}>
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Reliability
            </Title>
            <Text fz="sm">
              We always develope the most reliable Product without any failure
              issue on future.
            </Text>
          </Stack>
          <img src={about3} width={"40px"} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default About;
