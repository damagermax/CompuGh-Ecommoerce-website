import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container, Box } from "@mui/material";

const ImageCorousel = () => {
  var items = [
    {
      img: "http://prestashop17.joommasters.com/extron/modules/jmsslider/views/img/slides/44dc57faf5ec41b867af1718142132e2.jpg",
      title: "Sea star",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0598/6392/4789/files/Slider-3.jpg?v=1665129820&width=2000",
      title: "Tomato basil",
    },
    {
      img: "http://prestashop17.joommasters.com/extron/modules/jmsslider/views/img/slides/f159eeb1ef060dc1a404382ba6c2beb1.jpg",
      title: "Sea star",
    },
    {
      img: "http://prestashop17.joommasters.com/extron/modules/jmsslider/views/img/slides/ef630ee2fc71599ef421083b4cb6922b.jpg",
      title: "Bike",
    },
    {
      img: "http://prestashop17.joommasters.com/extron/modules/jmsslider/views/img/slides/53a7edeacb3eb0f8fe847c4ab1c3048c.jpg",
      title: "Bike",
    },
  ];

  return (
    <Container
      component="header"
      sx={{
        paddingInline: { xs: "0px", md: "24px" },
        maxWidth: "1170px",
        marginBottom: "40px",
        mt: { xs: "56px", sm: "65px", md: "120px", lg: "140px" },
      }}
    >
      <Carousel
        indicatorIconButtonProps={{
          style: {},
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#0088cc",
          },
        }}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            zIndex: 10,
            textAlign: "center",
            bottom: 0,
            marginBottom: "15px",
          },
        }}
      >
        {items.map((item, index) => (
          <Box
            component="img"
            key={index}
            src={item.img}
            sx={{
              objectFit: "fit",
              width: "100%",
              borderRadius: { xs: "0px", md: "5px" },
              overflow: "clip",
              height: { xs: "130px", sm: "200px", md: "300px", lg: "384px" },
            }}
          />
        ))}
      </Carousel>
    </Container>
  );
};

type item = { item: { name: string; description: string } };

export default ImageCorousel;
