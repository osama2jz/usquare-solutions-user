import { Box, Burger, Flex, Menu, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useStyles } from "./styles";
import {
  BrandFacebook,
  BrandInstagram,
  DeviceMobile,
} from "tabler-icons-react";

const Header = ({ opened, toggle }) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { classes } = useStyles({ opened });

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderBottom: "3px dashed rgb(0,0,0,0.1)",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          paddingBlock: isMobile ? "10px" : "25px",
        }}
      >
        <Flex align={"center"} gap={"md"}>
          <DeviceMobile color={theme.colors.blue[9]} />
          <Text>Any Questions? Call Us: +92 300 7171197</Text>
        </Flex>
        <Flex gap={"lg"} align={"center"}>
          <Text>Get Social with us!</Text>
          <BrandFacebook className={classes.icon} />
          <BrandInstagram className={classes.icon} />
        </Flex>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingBlock: isMobile ? "10px" : "20px",
          position: "sticky",
          backgroundColor: "white",
          zIndex: 1000,
          top: 0,
          boxShadow: "0px 5px 5px rgb(0,0,0,0.1)",
        }}
      >
        <Flex
          align={"center"}
          className={classes.logo}
          onClick={() => navigate("/")}
        >
          <img src={logo} width={170} />
        </Flex>
        <Flex gap={"lg"} align={"center"} className={classes.navigationBar}>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Menu>
            <Menu.Target>
              <Link className={classes.link}>Services</Link>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <Link className={classes.link} to="/services/ar-vr-games">
                  AR/VR Games
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className={classes.link}
                  to="/services/web-app-development"
                >
                  Web App Development
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className={classes.link}
                  to="/services/mobile-app-development"
                >
                  Mobile App Development
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className={classes.link}
                  to="/services/erp-business-solutions"
                >
                  ERP & Bussiness Solutions
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className={classes.link}
                  to="/services/digital-marketing-solutions"
                >
                  Digital Marketing Solutions
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className={classes.link} to="/services/graphic-designing">
                  Graphic Designing
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Link className={classes.link} to="/portfolio">
            Portfolio
          </Link>
          <Link className={classes.link} to="/products">
            Our Products
          </Link>
          <Link className={classes.link} to="/careers">
            Careers
          </Link>
          <Link className={classes.link} to="/about-us">
            About Us
          </Link>
          <Link className={classes.link} to="/blogs">
            Blogs
          </Link>
          <Link className={classes.link} to="/contact-us">
            Contact Us
          </Link>
        </Flex>

        {isMobile && <Burger opened={opened} onClick={toggle} color="black" />}
      </Box>
    </>
  );
};
export default Header;
