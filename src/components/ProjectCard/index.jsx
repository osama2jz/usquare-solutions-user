import { Image, Stack, Text, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";

const ProjectCard = ({ obj, ind }) => {
  const theme = useMantineTheme();
  const [show, setShow] = useState(false);
  return (
    <Stack
      key={ind}
      p="20px 50px"
      spacing={"0px"}
      style={{
        cursor: "pointer",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "#1864ab",
        borderRadius: "10px",
        position: "relative",
        boxShadow: "0px 5px 5px rgb(0,0,0,0.2)",
      }}
      onMouseLeave={() => setShow(false)}
      onMouseEnter={() => setShow(true)}
      onClick={() => window.open(obj?.link, "_blank")}
    >
      <Image src={obj?.img} width={"200px"} />
      <Text fw={"bold"} fz={"lg"} color={theme.colors.blue}>
        {obj?.name}
      </Text>
      {show && (
        <Text
          style={{
            position: "absolute",
            zIndex: "22",
            width: "100%",
            height: "100%",
            top: "0%",
            left: "0%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgb(24, 100, 171, 0.8)",
            color: "white",
          }}
          fz="lg"
        >
          {obj?.description}
        </Text>
      )}
    </Stack>
  );
};

export default ProjectCard;
