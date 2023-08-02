import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import Header from "./components/header";
import { Box, useMantineTheme } from "@mantine/core";
import Footer from "./components/footer";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/services";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutus";
import Career from "./pages/career";
import Portfolio from "./pages/portfolio";
import Products from "./pages/products";
import Blogs from "./pages/blogs";
import ViewJob from "./pages/career/ViewJob";
import ViewBlog from "./pages/blogs/ViewBlog";
import chat from "./assets/chat.svg";

function App() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box>
      <Header opened={opened} toggle={toggle} />
      <Box
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 999,
          padding: "10px",
          borderRadius: "50%",
          width: "25px",
          textAlign: "center",
          cursor:'pointer',
          backgroundColor: "#1864ab",
        }}
        onClick={() => window.open("http://m.me/UsquareSolutions", "_blank")}
      >
        <img src={chat} width={"20px"} />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:type" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/view-job" element={<ViewJob />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/view-blog" element={<ViewBlog />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
