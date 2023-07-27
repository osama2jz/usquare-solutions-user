import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  main: {
    width: "100vw",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundPosition: "center",
  },
  title: {
    borderLeft: "4px solid blue",
    borderColor: theme.colors.blue,
    paddingLeft: "5px",
  },
  content: {
    padding: "100px",
    textAlign: "center",
    [`@media (max-width: 1200px)`]: {
      padding: "20px",
    },
  },
}));
