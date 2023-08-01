import { Box, Flex, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import aboutUs from "../../assets/aboutUs.png";
import osam from "../../assets/osama.jpg";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import axios from "axios";
import { backendUrl } from "../../constants";

const Products = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 1290px)");
  const isMobile2 = useMediaQuery("(max-width: 900px)");
  const { classes } = useStyles();
  const [portflio, setPortflio] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/product/get_all")
      .then((res) => setPortflio(res.data.data));
  }, []);
  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
      >
        <Title>OUR PRODUCTS</Title>
        <Title order={3}>
          Products with latest Technologies and ease of use
        </Title>
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

export default Products;
