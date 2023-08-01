import { Box, Title, useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import ServiceCard from "./ServiceCard";
import { Carousel } from "@mantine/carousel";
import { backendUrl } from "../../constants";
import axios from "axios";

const Services = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [cat, setCat] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/category/get_all")
      .then((res) => setCat(res.data.data));
  }, []);
  return (
    <Box className={classes.services}>
      <Title align="center" color={theme.colors.blue} fw={400}>
        OUR SERVICES
      </Title>
      <Title order={4} align="center" fw={100}>
        Let's check out our Services
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
        {cat.map((obj, ind) => {
          return (
            <Carousel.Slide key={ind}>
              <ServiceCard title={obj?.name} description={obj?.description} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default Services;
