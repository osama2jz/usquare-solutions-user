import { createStyles } from "@mantine/core";
import footer from "../../assets/footer.png";
import { BorderBottom, BorderRadius } from "tabler-icons-react";
export const useStyles = createStyles((theme) => ({
  footer: {
    backgroundImage: `url(${footer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "rgb(255, 255, 255, 0.7)",
    padding: "50px 220px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    [`@media (max-width: 1200px)`]: {
      padding: "50px",
    },
  },
  title: {
    borderLeft: "4px solid blue",
    borderColor: theme.colors.blue,
    paddingLeft: "5px",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  searchIcon: {
    backgroundColor: theme.colors.blue,
    padding: "6px",
    borderEndStartRadius: "50%",
    borderStartStartRadius: "50%",
  },
}));
