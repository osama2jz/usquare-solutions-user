import { Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import img from "../../assets/why.png";
import { useStyles } from "./styles";
import why1 from "../../assets/why1.svg";
import why2 from "../../assets/why2.svg";
import why3 from "../../assets/why3.svg";
import why4 from "../../assets/why4.svg";
import { useMediaQuery } from "@mantine/hooks";

const WhyChooseUs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 800px)");

  return (
    <Flex className={classes.WhyChooseUs} gap={"100px"}>
      <Stack spacing={"xl"}>
        <Title color={theme.colors.blue} fw={400}>
          WHY CHOOSE US
        </Title>
        <Title order={3} fw={300}>
          Our Working Process
        </Title>
        <Text>
          We treat you like a partner and build on your vision by showing you
          new possibilities and alternative that suit you better.
        </Text>
        <Flex align={"flex-start"} gap={"md"}>
          <img src={why1} width={"40px"} />
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Product Analysis
            </Title>
            <Text fz="sm">
              Our R&D Department will make analysis on our client product.
            </Text>
          </Stack>
        </Flex>
        <Flex align={"flex-start"} gap={"md"}>
          <img src={why2} width={"40px"} />
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Wireframe or UI/UX Design
            </Title>
            <Text fz="sm">
              Our Professional Build UI/UX design as per your requirements.
            </Text>
          </Stack>
        </Flex>
        <Flex align={"flex-start"} gap={"md"}>
          <img src={why3} width={"40px"} />
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Product Development
            </Title>
            <Text fz="sm">
              Our Software Development team will start work on it.
            </Text>
          </Stack>
        </Flex>
        <Flex align={"flex-start"} gap={"md"}>
          <img src={why4} width={"40px"} />
          <Stack spacing={0}>
            <Title order={4} fw={500}>
              Product Testing
            </Title>
            <Text fz="sm">
              Our Dedicated Quality Assurance team will test the client product.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      {isMobile && (
        <img src={img} height={"300px"} style={{ margin: "auto" }} />
      )}
    </Flex>
  );
};

export default WhyChooseUs;
