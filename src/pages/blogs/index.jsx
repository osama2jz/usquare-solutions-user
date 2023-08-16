import {
  Box,
  Loader,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../../constants";
import BlogCard from "./BlogCard";
import blogss from "../../assets/blogss.png";
import { useStyles } from "./styles";

const Blogs = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(backendUrl + "/blog/get_all").then((res) => {
      setBlogs(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${blogss})`, width: "100%" }}
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
        {loading ? (
          <Loader m="auto" />
        ) : (
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
        )}
      </Stack>
    </Box>
  );
};

export default Blogs;
