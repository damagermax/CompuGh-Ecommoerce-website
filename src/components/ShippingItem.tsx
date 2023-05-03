import { Box, Stack, Typography } from "@mui/material";

type ShippingItemProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const ShippingItem = ({ children, title, description }: ShippingItemProps) => {
  return (
    <Box p={{ xs: "15px", md: "25px", lg: "30px" }}>
      <Stack direction="row" spacing={2} alignItems="center">
        {children}
        <Stack direction="column">
          <Typography fontSize="15px" font-weight="600" color="#000000">
            {title}
          </Typography>
          <Typography variant="body2" fontSize="13px" color="#888888">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShippingItem;
