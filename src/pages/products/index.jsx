import { Box, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import aboutUs from "../../assets/aboutUs.png";
import { useStyles } from "./styles";

const Products = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery("(min-width: 1290px)");
  const isMobile2 = useMediaQuery("(max-width: 900px)");
  const { classes } = useStyles();

  return (
    <Box>
      <Box
        className={classes.main}
        style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
      >
        <Title>OUR PRODUCTS</Title>
        <Title order={3}>
          Products with latest Technologies and ease of use
        </Title>
      </Box>
    </Box>
  );
};

export default Products;
