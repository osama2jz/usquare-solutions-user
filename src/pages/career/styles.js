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
    padding: "100px 200px",
    textAlign: "center",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  job: {
    display: "flex",
    alignItems: "flex-end",
    borderBottom: "1px solid rgb(0,0,0,0.1)",
    padding: "10px",
    width: "100%",
    justifyContent: "space-between",
    ":last-child": {
      border: "none",
    },
    [`@media (max-width: 800px)`]: {
      flexDirection: "column",
      width: "90%",
      alignItems: "flex-start",
    },
  },
}));
