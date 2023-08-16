import { Box, Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import ar from "../../assets/ar.png";
import ServiceCard from "../home/ServiceCard";
import { useStyles } from "./styles";

const Content = ({ data }) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${ar})`, width: "100%" }}
      >
        <Title>{data?.title}</Title>
        <Title order={3} fw={400}>
          {data?.subTitle}
        </Title>
      </Box>
      <Flex className={classes.top} gap={"100px"} align={"center"}>
        <Stack spacing={"xl"}>
          <Title color={theme.colors.blue} fw={400}>
            {data?.title2}
          </Title>
          <Title order={3} fw={300} align="justify">
            {data?.subTitle2}
          </Title>
          <Text align="justify">{data?.description}</Text>
        </Stack>
        {!isMobile && <img src={data?.img} width={"30%"} />}
      </Flex>
      <Stack spacing={"xl"} mt="lg">
        <Title color={theme.colors.blue} fw={400} align="center">
          OUR SPECIALIZATION
        </Title>
        <Title order={3} fw={300} align="center">
          We Specialize in Building
        </Title>
        {data?.specialization.map((obj, ind) => {
          return (
            <>
              {ind % 2 === 0 ? (
                <Flex
                  gap={isMobile ? "md" : "100px"}
                  align={"center"}
                  className={classes.top1}
                  wrap={isMobile ? "wrap" : "nowrap"}
                >
                  <Stack>
                    <Title color={theme.colors.blue} fw={400} order={3}>
                      {obj?.title}
                    </Title>
                    <Text>{obj?.description}</Text>
                  </Stack>
                  <img src={obj?.img} width={isMobile ? "80%" : "30%"} />
                </Flex>
              ) : (
                <Flex
                  gap={isMobile ? "md" : "100px"}
                  align={"center"}
                  className={classes.top1}
                  wrap={isMobile ? "wrap" : "nowrap"}
                  direction={isMobile ? "column-reverse" : ""}
                >
                  <img src={obj?.img} width={isMobile ? "80%" : "30%"} />
                  <Stack>
                    <Title color={theme.colors.blue} fw={400} order={3}>
                      {obj?.title}
                    </Title>
                    <Text>{obj?.description}</Text>
                  </Stack>
                </Flex>
              )}
            </>
          );
        })}
      </Stack>
      {data?.technologyStack && (
        <Stack className={classes.top1}>
          <Title align="center" color={theme.colors.blue}>
            Technology Stack
          </Title>
          <Text>{data?.technologyStack.desc}</Text>
          {data?.technologyStack.data.map((o, i) => (
            <Stack key={i} spacing={"5px"}>
              <Text fw={"bold"}>{o.title}</Text>
              <Text>{o.desc}</Text>
            </Stack>
          ))}
        </Stack>
      )}

      {/* //for later maybe */}
      {data?.bottomCards && (
        <Box className={classes.services}>
          <Title align="center" color={theme.colors.blue} fw={400}>
            WE DEVELOPE
          </Title>
          <Title order={4} align="center" fw={100}>
            We work in following types
          </Title>

          <Flex gap="xl" mt="xl" justify={"center"} wrap={"wrap"}>
            <ServiceCard
              title="Marker based Augmentation"
              description="User can see life-like digital overlays and interact with them by pointing a camera at pacific trigger point."
            />
            <ServiceCard
              title="Location based Augmentation"
              description="Navigate the customer right to your store with using GPS, Compass and Beacons."
            />
            <ServiceCard
              title="Markerless Augmentation"
              description="Marker less AR is based on the simultaneous localization and mapping (SMAL) technology."
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Content;
