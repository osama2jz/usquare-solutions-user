import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  s: {
    backgroundColor: theme.colors.blue,
    padding: "30px",
    marginInline: "auto",
    borderRadius: "50%",
  },
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
  top: {
    padding: "80px 200px",
    backgroundColor: "#f8f9fa",
    marginTop: "50px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  top1: {
    padding: "10px 200px",
    marginTop: "50px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  services: {
    padding: "100px 200px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
}));
