import Brands from "../components/Brands";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import ImageCorousel from "../components/ImageCorousel";
import Navbar from "../components/Navbar";
import ShippingInfo from "../components/ShippingInfo";
import TopSelling from "../components/TopSelling";
import { Box, Container, Divider } from "@mui/material";

const Home = () => {
  return (
    <>
      <ImageCorousel />
      <ShippingInfo />

      <Featured />
      <Container
        component="section"
        sx={{ background: "#f8f8f8", minWidth: "100vw", padding: "40px 0" }}
      >
        <TopSelling />
      </Container>
      <Brands />

      <Container
        component="section"
        sx={{
          background: "   #e2eaee",
          minWidth: "100vw",
          padding: " 0",
        }}
      >
        <Footer />
      </Container>
    </>
  );
};

export default Home;
