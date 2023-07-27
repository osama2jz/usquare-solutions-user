import { Box, Flex, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

const ToolsTech = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Box className={classes.services}>
      <Title align="center" color={theme.colors.blue} fw={400}>
        TOOLS & TECHNOLOGIES
      </Title>
      <Title order={4} align="center" fw={100}>
        We have Expertise on many Tools
      </Title>
      <Flex wrap={"wrap"} gap="xl" justify={"center"} mt="50px">
        {new Array(17).fill().map((a, i) => (
          <img
            key={i}
            width={"100px"}
            height={"80px"}
            src={new URL(`../../assets/tech${i + 1}.svg`, import.meta.url).href}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ToolsTech;
