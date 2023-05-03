import {
  Box,
  Container,
  Divider,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import ProductCard from "./ProductCard";

const TopSelling = () => {
  return (
    <Container sx={{ maxWidth: "1170px", margin: "0 auto", padding: "0 15px" }}>
      <Box mb="40px">
        <Typography
          variant="h2"
          sx={{
            fontSize: "20px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Top Selling of the Week
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
        spacing={{ xs: 1, sm: 1.5, md: 3, lg: 3 }}
        columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
      >
        {Array.from(Array(30)).map((_, index) => (
          <Grid item xs={1} sm={1} md={1} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="primary"
        sx={{ m: "40px auto 0px", width: "fit-content" }}
      />
    </Container>
  );
};

export default TopSelling;
