import { Box, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import career from "../../assets/career.jpg";
import { useStyles } from "./styles";
import About from "../home/About";

const Career = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
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
        <Text>JOBS HERE HEHRUE</Text>
      </Stack>
      <About/>
    </Box>
  );
};

export default Career;
