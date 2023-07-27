import { Box, Flex, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import ar from "../../assets/ar.png";
import ar1 from "../../assets/ar1.png";
import ar2 from "../../assets/ar2.png";
import ServiceCard from "../home/ServiceCard";
import { useStyles } from "./styles";

const Content = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(max-width: 800px)");
  const [data, setData] = useState({
    title: "AR / VR GAMES",
    subTitle: "Code For The Next Development",
    title2: "AR/VR GAMES DEVELOPMENT",
    subTitle2:
      "We transform your business goals to build high performance mobile apps.",
    description:
      "AR and VR are the next big thing! We are here to help you stay ahead in race with advanced AR and VR Development services, our developers create AR and VR apps for iPad, iPhone, Android and Windows. By combining technology and creativity we create new spaces and unique experiences for and with you.",
    img: ar1,
    bottomCards: true,
    specialization: [
      {
        title: "Android App Development Services",
        description:
          "Our expert team will help your unique design become a bridge between you and your customers to build products that change peoples’ lives. Using the latest technology and industry experience, our full-stack Android developers develop successful Android apps for our customers.",
        img: ar2,
      },
      {
        title: "IOS Development Services",
        description:
          "Our expert team will help your unique design become a bridge between you and your customers to build products that change peoples’ lives. Using the latest technology and industry experience, our full-stack Android developers develop successful Android apps for our customers.",
        img: ar2,
      },
    ],
  });
  return (
    <Box>
      <Box className={classes.main} style={{ backgroundImage: `url(${ar})`, width:'100%' }}>
        <Title>{data?.title}</Title>
        <Title order={3}>{data?.subTitle}</Title>
      </Box>
      <Flex className={classes.top} gap={"100px"} align={"center"}>
        <Stack spacing={"xl"}>
          <Title color={theme.colors.blue} fw={400}>
            {data?.title2}
          </Title>
          <Title order={3} fw={300}>
            {data?.subTitle2}
          </Title>
          <Text>{data?.description}</Text>
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
      <Box className={classes.services}>
        <Title align="center" color={theme.colors.blue} fw={400}>
          WE DEVELOPE
        </Title>
        <Title order={4} align="center" fw={100}>
          We work in following types
        </Title>
        {data?.bottomCards && (
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
        )}
      </Box>
    </Box>
  );
};

export default Content;
