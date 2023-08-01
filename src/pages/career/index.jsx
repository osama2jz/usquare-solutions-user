import {
  Box,
  Stack,
  Title,
  useMantineTheme
} from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import career from "../../assets/career.jpg";
import { backendUrl } from "../../constants";
import About from "../home/About";
import JobCard from "./JobCard";
import { useStyles } from "./styles";

const Career = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(backendUrl + "/career/get_all")
      .then((res) => setJobs(res.data.data));
  }, []);
  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${career})`, width: "100%" }}
      >
        <Title>CAREER</Title>
        <Title order={3}>Let's Build Together</Title>
      </Box>
      <Stack spacing={"xl"} className={classes.content}>
        <Title color={theme.colors.blue} fw={400}>
          OPENING POSITIONS
        </Title>
        <Title order={3} fw={300}>
          Start's your work with Usquare Solutions
        </Title>
        <Stack>
          {jobs.map((obj, ind) => {
            return <JobCard obj={obj} key={ind} />;
          })}
        </Stack>
      </Stack>
      <About />
    </Box>
  );
};

export default Career;
