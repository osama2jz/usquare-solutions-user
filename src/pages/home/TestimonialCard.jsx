import { Avatar, Box, Image, Text, Title } from "@mantine/core";
import React from "react";
import img from "../../assets/service.svg";
import { useStyles } from "./styles";

const TetstimonialCard = ({ data }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.testimonialCard}>
      <Avatar
        className={classes.testAvatar}
        size="100px"
        src={
          data?.image ||
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        }
      />
      <Text fw={"500"} fz="lg">
        {data?.name || "Mark Silian"}
      </Text>
      <Text fw={"300"} fz="md">
        {data?.designation || "Government Employee"}
      </Text>
      <Text fz={"sm"} color="gray" align="justify" mt="md">
        {data?.testimonial ||
          "I have had the pleasure to work with Usquare solutions on a couple of projects for my organization and their level of sincerity and dedication towards their work is unmatched. They have always provided quality work on time without any excuse. I would highly recommend them and would love to work with them in the future."}
      </Text>
    </Box>
  );
};

export default TetstimonialCard;
