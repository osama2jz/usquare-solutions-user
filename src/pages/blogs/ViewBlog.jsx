import React from "react";
import { useStyles } from "./styles";
import { Box, Text, Title } from "@mantine/core";
import parse from "html-react-parser";
import blogss from "../../assets/blogss.png";
import { useLocation } from "react-router-dom";

const ViewBlog = () => {
  const { classes } = useStyles();
  const { blogData } = useLocation().state;
  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${blogss})`, width: "100%" }}
      >
        <Title>{blogData.title}</Title>
        <Title order={2} fw={100}>
          {new Date(blogData?.date_time).getDate() +
            "-" +
            new Date(blogData?.date_time).getMonth() +
            "-" +
            new Date(blogData?.date_time).getFullYear()}
        </Title>
      </Box>
      <Text className={classes.blogData}>{parse(blogData?.body)}</Text>
    </Box>
  );
};

export default ViewBlog;
