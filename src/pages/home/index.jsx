import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import img from "../../assets/home.png";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Tetstimonials from "./Testimonials";
import ToolsTech from "./Tools&Tech";
import WhyChooseUs from "./WhyChooseUs";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import LetsTalk from "./LetsTalk";

const Home = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(min-width: 800px)");
  return (
    <Box>
      <SimpleGrid
        className={classes.top}
        spacing={isMobile ? "100px" : "10px"}
        breakpoints={[
          { maxWidth: "sm", cols: 1 },
          { minWidth: "md", cols: 2 },
        ]}
      >
        <Stack justify="center">
          <Title>Welcome to Usquare Solutions…</Title>
          <Text>
            We are a leading digital agency providing the ideal technology
            solutions to all your Development needs, serving globally over the 8
            years.
          </Text>
          <Button
            variant="white"
            style={{ alignSelf: "flex-start", color: "black" }}
          >
            Get Started
          </Button>
        </Stack>
        <Image src={img} height={"100%"} fit="contain" />
      </SimpleGrid>
      <Services />
      <About />
      <Projects />
      <WhyChooseUs />
      <Tetstimonials />
      <LetsTalk />
      <ToolsTech />
    </Box>
  );
};

export default Home;
