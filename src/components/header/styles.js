import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme, { opened }) => ({
  logo: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    [`@media (max-width: 1100px)`]: {
      color: "black",
    },
    "&:hover": {
      cursor: "pointer",
      scale: "1.02",
      color: theme.colors.blue,
    },
  },
  icon: {
    backgroundColor: theme.colors.blue,
    padding: "10px",
    color: "white",
    borderRadius: "50%",
    cursor: "pointer",
    border:'1px solid white',
    "&:hover": {
      color: theme.colors.blue,
      backgroundColor: "white",
      borderColor: theme.colors.blue,
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  navigationBar: {
    [`@media (max-width: 1100px)`]: {
      flexDirection: "column",
      position: "absolute",
      top: "80px",
      padding: "50px 20px",
      color: "black !important",
      borderRadius: "10px",
      width: "100vw",
      right: 0,
      backgroundColor: "white",
      display: opened ? "flex" : "none",
      zIndex: 11,
    },
  },
}));
