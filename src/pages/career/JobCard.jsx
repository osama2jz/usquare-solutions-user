import { Anchor, Box, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { ChevronRight } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ obj }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <Box className={classes.job}>
      <Stack spacing={"XS"} align="flex-start">
        <Text fw={"bold"} fz="lg">
          {obj?.title}
        </Text>
        <Text>Experience: {obj?.experience}</Text>
      </Stack>
      <Text>Positions: {obj?.position}</Text>
      <Text>Job Type: {obj?.jobType}</Text>
      <Anchor
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => navigate("/view-job", { state: { job: obj } })}
      >
        View Details <ChevronRight size={"18px"} />
      </Anchor>
    </Box>
  );
};

export default JobCard;
