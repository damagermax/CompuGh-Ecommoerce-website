import {
  Box,
  Typography,
  Rating,
  Stack,
  IconButton,
  colors,
} from "@mui/material";

import { RiShoppingBasket2Line } from "react-icons/ri";

const ProductCard = () => {
  return (
    <Box sx={{ border: "1px solid #e6e6e6", p: 1, background: "white" }}>
      <Box
        component="img"
        src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-7.jpg"
        sx={{
          objectFit: "cover",
          width: "100%",

          maxHeight: 184,
        }}
      ></Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: "13px",
          color: "#aaaaaa",
          margin: "7px 0",
        }}
      >
        Aplle
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          color: "#0168b8",
          fontWeight: "normal",
          lineClamp: 2,
        }}
      >
        Techno Ck7n Camon 20 Prp 256GB 8GB RAM
      </Typography>

      <Rating
        name="product rating"
        sx={{ marginTop: "5px  " }}
        value={5}
        size="small"
        readOnly
      />

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="body1"
          sx={{ fontSize: "14px", color: "#333333", fontWeight: "semibold" }}
        >
          $898.8
        </Typography>

        <IconButton
          aria-label="cart"
          sx={{
            background: "#eeeeee",
            color: "#888888",
            "&:hover": {
              background: "#0088cc",
              color: "white",
            },
          }}
        >
          <RiShoppingBasket2Line size={18} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ProductCard;
