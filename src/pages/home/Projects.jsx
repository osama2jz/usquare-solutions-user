import { Box, Title, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import ServiceCard from "./ServiceCard";
import { Carousel } from "@mantine/carousel";
import axios from "axios";
import { backendUrl } from "../../constants";

const Projects = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/portfolio/get_recent_six")
      .then((res) => setPortfolio(res.data.data));
  }, []);
  return (
    <Box className={classes.services}>
      <Title align="center" color={theme.colors.blue} fw={400}>
        RECENT PROJECTS
      </Title>
      <Title order={4} align="center" fw={100}>
        View our some Latest Projects
      </Title>
      <Carousel
        slideSize="33.333333%"
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
        {portfolio?.map((obj, ind) => {
          return (
            <Carousel.Slide key={ind}>
              <ServiceCard
                title={obj?.title}
                description={obj?.description}
                picture={obj?.picture}
                link={obj?.project_link}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Projects;
