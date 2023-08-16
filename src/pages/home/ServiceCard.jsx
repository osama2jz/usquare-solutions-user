import { Box, Image, Text, Title } from "@mantine/core";
import React from "react";
import img from "../../assets/service.svg";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  title = "Web App Development",
  picture,
  link,
  description = "We are offering a huge variety of services from web development to web hosting.",
}) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  let goto =
    title === "AR/VR Games"
      ? "ar-vr-games"
      : title === "Graphic Designing"
      ? "graphic-designing"
      : title === "Digital Marketing Solutions"
      ? "digital-marketing-solutions"
      : title === "Web App Development"
      ? "web-app-development"
      : title === "Mobile App Development"
      ? "mobile-app-development"
      : "";
  return (
    <Box
      className={classes.serviceCard}
      onClick={() =>
        link ? window.open(link, "_blank") : navigate(`/services/${goto}`)
      }
    >
      <Image src={picture || img} width={"100px"} height={"100px"} />
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
