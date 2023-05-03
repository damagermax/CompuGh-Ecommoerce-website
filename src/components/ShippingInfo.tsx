import { Container, Grid } from "@mui/material";
import ServiceItem from "./ShippingItem";
import { TbTruckDelivery } from "react-icons/tb";
import { IoSyncCircleOutline } from "react-icons/io5";
import { RiCustomerService2Line, RiSecurePaymentLine } from "react-icons/ri";

const ShippingInfo = () => {
  const items = [
    {
      icon: <TbTruckDelivery size={35} />,
      title: "Free Shipping",
      description: "On order over %99",
    },
    {
      icon: <IoSyncCircleOutline size={35} />,
      title: "Money Return",
      description: "30 Days money return",
    },
    {
      icon: <RiCustomerService2Line size={35} />,
      title: "Support 24/7",
      description: "On order over %99",
    },
    {
      icon: <RiSecurePaymentLine size={35} />,
      title: "Safe Payment",
      description: "Protect online payment",
    },
  ];

  return (
    <Container
      sx={{
        maxWidth: "1170px",
        margin: "0 auto",
        padding: "0 15px",
      }}
    >
      <Grid
        container
        columns={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          color: "#0088cc",
          border: { sm: "none", xs: "1px solid #e5e5e5" },
        }}
      >
        {items.map(({ icon, title, description }) => (
          <Grid
            item
            xs={1}
            sm={1}
            border={{ xs: "none", sm: "1px solid #e5e5e5" }}
          >
            <ServiceItem title={title} description={description}>
              {icon}
            </ServiceItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShippingInfo;
