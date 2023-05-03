import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{ maxWidth: "1170px", margin: "0 auto ", padding: "40px 15px" }}
    >
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
        columns={{ xs: 1, sm: 3, md: 3, lg: 6 }}
        mb="40px"
      >
        <Grid item xs={1} sm={1} md={2}>
          <Box
            component="img"
            width="60%"
            src="https://compughana.com/media/logo/stores/2/COMPU_G-01.png"
            p="0PX"
          />
          <Typography variant="body2" fontSize="12px" m="20px 0px 15px">
            Compu-Ghana is Ghana's premier retail outlet for I.T. products,
            services and accessories along-with audio-visual equipment and home
            appliances, all under one roof.
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={2} textAlign="center">
          <Typography
            variant="h3"
            fontSize="14px"
            fontWeight="bold"
            letterSpacing="0.2px"
          >
            COMPANY
          </Typography>

          <Stack></Stack>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
          <Typography
            variant="h3"
            fontSize="14px"
            fontWeight="bold"
            letterSpacing="0.2px"
          >
            NEWSLETTER
          </Typography>

          <Typography variant="body2" fontSize="12px" m="20px 0px 15px">
            Subscribe to our newsletter to get updates on our latest offers!
          </Typography>
          <TextField
            id="filled-basic"
            label=""
            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
            placeholder="Email@example.com"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HiOutlineMail />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{ mt: "10px", width: "100%" }}
          >
            SUBSCRIBE
          </Button>
        </Grid>
      </Grid>
      <Divider></Divider>
    </Container>
  );
};

export default Footer;
