import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import blogs from "../../assets/blogs.png";
import blog from "../../assets/blog.webp";
import BlogCard from "./blogCard";
import { useStyles } from "./styles";
import axios from "axios";
import { backendUrl } from "../../constants";

const Blogs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/blog/get_all")
      .then((res) => setBlogs(res.data.data));
  }, []);

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${blogs})`, width: "100%" }}
      >
        <Title>OUR BLOGS</Title>
        <Title order={2} fw={100}>
          Get Some Knowledge
        </Title>
      </Box>
      <Stack spacing={"xl"} className={classes.content}>
        <Title color={theme.colors.blue} fw={400}>
          BLOGS
        </Title>
        <Title order={3} fw={300}>
          Let's Start Reading
        </Title>
        <SimpleGrid
          spacing={"xl"}
          breakpoints={[
            { minWidth: "xs", cols: 1 },
            { minWidth: "sm", cols: 2 },
            { minWidth: "lg", cols: 3 },
          ]}
        >
          {blogs.map((obj, ind) => {
            return <BlogCard obj={obj} ind={ind} key={ind} />;
          })}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Blogs;
