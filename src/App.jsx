import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import Header from "./components/header";
import { Box } from "@mantine/core";
import Footer from "./components/footer";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/services";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutus";
import Career from "./pages/career";
import Portfolio from "./pages/portfolio";
import Products from "./pages/products";

function App() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box>
      <Header opened={opened} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:type" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
