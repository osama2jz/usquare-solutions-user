import { Box, Image, Text, Title } from "@mantine/core";
import React from "react";
import img from "../../assets/service.svg";
import { useStyles } from "./styles";

const ServiceCard = ({
  title = "Web App Development",
  description = "We are offering a huge variety of services from web development to web hosting.",
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.serviceCard}>
      <Image src={img} width={"100px"} height={"100px"} />
      <Text fw={"500"} fz="lg">
        {title}
      </Text>
      <Text fz={"sm"} color="gray" align="center">
        {description}
      </Text>
    </Box>
  );
};

export default ServiceCard;
