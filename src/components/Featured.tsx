import {
  Container,
  Grid,
  Tab,
  Tabs,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GiSmartphone } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { IoWatchOutline, IoGameControllerOutline } from "react-icons/io5";

import ProductCard from "./ProductCard";

const Featured = () => {
  const [value, setValue] = useState(0);

  const matches = useMediaQuery("(max-width:900px)");
  const iconSize = matches ? 18 : 32;
  const tabStyle = {
    fontSize: {
      xs: "500px",
      sm: "5px",
      md: "6px",
    },
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{ maxWidth: "1170px", margin: "0 auto ", padding: "60px 15px" }}
    >
      {/* <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "red" } }}
        sx={{
          minWidth: "100%",

          //border: { xs: "none", md: "1px solid #e5e5e5" },
        }}
        aria-label="icon label tabs example"
        centered
        variant={matches ? "scrollable" : "fullWidth"}
        scrollButtons
      >
        <Tab
          icon={<FiMonitor size={iconSize} sx={tabStyle} />}
          label="Tv & Audios"
        />

        <Tab
          icon={<GiSmartphone size={iconSize} sx={tabStyle} />}
          label="Desk & Laptop"
        />
        <Tab
          icon={<IoGameControllerOutline size={iconSize} sx={tabStyle} />}
          label="Games Console"
        />
        <Tab
          icon={<GiSmartphone size={iconSize} sx={tabStyle} />}
          label="Smartphones"
        />
        <Tab
          icon={<IoWatchOutline size={iconSize} sx={tabStyle} />}
          label="Watches"
        />

        <Tab
          icon={<GiSmartphone size={iconSize} sx={tabStyle} />}
          label="Accessories"
        />
      </Tabs> */}
      <Box mb="40px">
        <Typography
          variant="h2"
          sx={{
            fontSize: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Recommended for you
        </Typography>
        <Divider
          sx={{
            position: "relative",
            height: "1px",
            border: "none",
            background: "#e5e5e5",

            "&::before": {
              height: "1px",
              background: " #0088cc",
              content: '""',
              position: " absolute",
              width: "90px",
              inset: 0,
            },
          }}
        ></Divider>
      </Box>

      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        {Array.from(Array(5)).map((_, index) => (
          <Grid item xs={1} sm={1} md={1} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Featured;
