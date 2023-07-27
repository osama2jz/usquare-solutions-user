import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  top: {
    height: "500px",
    backgroundColor: "#4e00a4",
    color: "white",
    padding: "50px 200px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
      height: "600px",
    },
  },
  services: {
    padding: "100px 200px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  serviceCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.blue,
    borderWidth: "2px",
    width: "250px",
    height: "250px",
    borderStyle: "solid",
    padding: "20px",
    borderRadius: "10px",
    gap: "10px",
    marginLeft: "10px",
  },
  testimonialCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.blue,
    borderWidth: "2px",
    width: "250px",
    height: "450px",
    borderStyle: "solid",
    padding: "20px",
    borderRadius: "10px",
    // gap: "10px",
    marginLeft: "10px",
  },
  about: {
    padding: "100px 200px",
    backgroundColor: "#f8f9fa",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  WhyChooseUs: {
    padding: "100px 200px",
    backgroundColor: "#f8f9fa",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  test: {
    padding: "100px 200px",
    [`@media (max-width: 800px)`]: {
      padding: "20px",
    },
  },
  aboutSub: {
    textAlign: "right",
  },
  testAvatar: {
    borderRadius: "50%",
    borderColor: theme.colors.blue,
    borderWidth: "5px",
    borderStyle: "solid",
  },
  counter: {
    width: "140px",
    padding: "10px",
    textAlign: "center",
    height: "80px",
    borderRadius: "10px",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    ":hover": {
      backgroundColor: theme.colors.blue,
      cursor: "pointer",
      "& > *": {
        color: "white !important",
      },
    },
  },
  form: {
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
    borderRadius: "10px",
    padding: "40px 20px",
  },
}));
