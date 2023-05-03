import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  alpha,
  styled,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { TbSearch } from "react-icons/tb";
import { CgMenuGridR } from "react-icons/cg";
import { RiShoppingBasket2Line, RiArrowDownSLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  return (
    <Box>
      <CssBaseline />

      <AppBar elevation={2}>
        <Toolbar
          sx={{
            maxWidth: "1170px",
            width: "100%",
            margin: "0 auto ",
          }}
        >
          <Box
            component="img"
            src="https://compughana.com/media/logo/stores/2/COMPU_G-01.png"
            width="100px"
            height="28px"
            sx={{
              background: "white",
              p: "2px",
              borderRadius: "2px",
            }}
            zIndex="10"
          />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 2 }}>
            <Search sx={{ display: { xs: "none", sm: "block" } }}>
              <SearchIconWrapper>
                <TbSearch />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search product…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{}}>
            <IconButton>
              <Avatar sx={{ width: 24, height: 24 }}></Avatar>
            </IconButton>
            <IconButton aria-label="cart icon" color="inherit">
              <Badge badgeContent={4} color="error">
                <RiShoppingBasket2Line />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>

        {/*  second toolbar */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            background: "white",
            color: "black",
          }}
        >
          <Toolbar
            variant="dense"
            sx={{ maxWidth: "1170px", width: "100%", margin: "0 auto " }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                "&:hover": {
                  color: "#0088cc",
                  cursor: "pointer",
                },
              }}
            >
              <CgMenuGridR size={22} />
              <Typography variant="subtitle1" mr={2}>
                All Categories
              </Typography>
              <RiArrowDownSLine size={18} />
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>

      <Outlet />
    </Box>
  );
};

export default Navbar;
