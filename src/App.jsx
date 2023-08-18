import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import Header from "./components/header";
import { Box, useMantineTheme } from "@mantine/core";
import Footer from "./components/footer";
import Home from "./pages/home";
import { Route, Routes, useLocation } from "react-router-dom";
import Services from "./pages/services";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutus";
import Career from "./pages/career";
import Portfolio from "./pages/portfolio";
import Products from "./pages/products";
import Blogs from "./pages/blogs";
import ViewJob from "./pages/career/ViewJob";
import ViewBlog from "./pages/blogs/ViewBlog";
import { useEffect } from "react";
import { BrandWhatsapp } from "tabler-icons-react";

function App() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
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
          cursor: "pointer",
          backgroundColor: "#1864ab",
        }}
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=+923007171197&text=Hello, I have a query`
          )
        }
      >
        <BrandWhatsapp color="white" />
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
