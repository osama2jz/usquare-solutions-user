import { Box, Flex, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import aboutUs from "../../assets/aboutUs.png";
import ProjectCard from "../../components/ProjectCard";
import { backendUrl } from "../../constants";
import { useStyles } from "./styles";

const Portfolio = () => {
  const { classes } = useStyles();
  const [portflio, setPortflio] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/portfolio/get_all")
      .then((res) => setPortflio(res.data.data));
  }, []);
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
