import { Box, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import career from "../../assets/career.jpg";
import parse from "html-react-parser";
import { useLocation } from "react-router-dom";

const ViewJob = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { job } = useLocation().state;
  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${career})`, width: "100%" }}
      >
        <Title>{job?.title}</Title>
        <Title order={2} fw={100}>
          {job?.jobType}
        </Title>
      </Box>
      <Stack spacing={"sm"} className={classes.content}>
        <Title color={theme.colors.blue} fw={400}>
          Job Details
        </Title>
        <Text align="left">Experience: {job?.experience}</Text>
        <Text align="left">Positions: {job?.position}</Text>
        <Text align="left">{parse(job?.body)}</Text>
      </Stack>
    </Box>
  );
};

export default ViewJob;
