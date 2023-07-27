import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import aboutUs from "../../assets/aboutUs.png";
import { useStyles } from "./styles";
import osam from "../../assets/osama.jpg";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const Portfolio = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 1290px)");
  const isMobile2 = useMediaQuery("(max-width: 900px)");
  const { classes } = useStyles();
  const [portflio, setPortflio] = useState([
    {
      name: "Muhammad Usama",
      description:
        "This is a sample description about this project. This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },
    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },
    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },
    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },
    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },
    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },

    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },

    {
      name: "Muhammad Usama",
      description: "This is a sample description about this project",
      img: osam,
      link: "https://www.facebook.com",
    },
  ]);

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
      >
        <Title>OUR PORTFOLIO</Title>
        <Title order={3}>From Concept To Creation</Title>
      </Box>
      <Flex
        wrap={"wrap"}
        gap="20px"
        m="auto"
        justify={"center"}
        rowGap={"30px"}
        className={classes.content}
      >
        {portflio.map((obj, ind) => {
          return <ProjectCard obj={obj} ind={ind} key={ind} />;
        })}
      </Flex>
    </Box>
  );
};

export default Portfolio;
