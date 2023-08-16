import { Carousel } from "@mantine/carousel";
import { Box, Flex, Loader, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import img from "../../assets/home2.png";
import TetstimonialCard from "./TestimonialCard";
import { useStyles } from "./styles";
import { backendUrl } from "../../constants";
import axios from "axios";

const Tetstimonials = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 800px)");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/testimonial/get_all").then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, []);
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
            // slideGap="md"
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
            {loading ? (
              <Loader m="auto" my="100px"/>
            ) : (
              data.map((obj, ind) => (
                <Carousel.Slide
                  key={ind}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TetstimonialCard data={obj} />
                </Carousel.Slide>
              ))
            )}
            {data.length < 1 && !loading && (
              <>
                <Carousel.Slide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TetstimonialCard />
                </Carousel.Slide>
                <Carousel.Slide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <TetstimonialCard />
                </Carousel.Slide>
              </>
            )}
          </Carousel>
        </Box>
      </Flex>
    </Box>
  );
};

export default Tetstimonials;
