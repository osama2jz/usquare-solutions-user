import { Box, Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import img from "../../assets/home2.png";
import { useStyles } from "./styles";
import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import about3 from "../../assets/about3.svg";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import TetstimonialCard from "./TestimonialCard";

const Tetstimonials = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 800px)");

  return (
    <Box className={classes.test}>
      <Title align="center" color={theme.colors.blue} fw={400}>
        CLIENT TESTIMONIALS
      </Title>
      <Title order={4} align="center" fw={100}>
        What our Clients are Saying
      </Title>
      <Flex gap={"50px"}>
        {isMobile && (
          <img src={img} height={"300px"} style={{ margin: "auto" }} />
        )}
        <Box w={!isMobile ? "100%" : "60%"}>
          <Carousel
            slideSize="50%"
            slideGap="md"
            mt="xl"
            loop
            styles={{
              control: { backgroundColor: theme.colors.blue, color: "white" },
            }}
            align="start"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
          >
            <Carousel.Slide>
              <TetstimonialCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <TetstimonialCard />
            </Carousel.Slide>
            <Carousel.Slide>
              <TetstimonialCard />
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Flex>
    </Box>
  );
};

export default Tetstimonials;
