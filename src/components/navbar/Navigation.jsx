import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DrawerComponent from "./Drawer.jsx";
import LoginButton from "./LoginButton.jsx";
import CartIcon from "../cart/cartIcon/CartIcon.jsx";
import CartDropdown from "../cart/cartDropdown/CartDropdown.jsx";
import { cartContext } from "../../useContextHook/CartContextHook";


const theme = createTheme();
const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "rgb(56, 56, 56)",
    fontSize: "1.25rem",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "rgb(43, 43, 43)",
    },
  },
  "@media (max-width: 704px)": {
    link: {
      marginLeft: theme.spacing(3),
    },
  },
}));

const Navigation = () => {
  const { isCartOpen } = useContext(cartContext);
  const navigate = useNavigate();

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{backgroundColor: "#FEFBF6", boxShadow: 2 }}
        className="appbar"
      >
        <Toolbar>
          <Typography
            variant="h4"
            className={classes.logo}
            sx={{ color: "rgb(56, 56, 56)" }}
            onClick={()=>navigate("/")}
          >
            BIPONEE
          </Typography>

          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                HOME
              </Link>
              <Link to="/shop" className={classes.link}>
                SHOP
              </Link>
              <Link to="/contact" className={classes.link}>
                CONTACT
              </Link>
              <LoginButton className="link" />
            </div>
          )}
          <CartIcon />
        </Toolbar>
      </AppBar>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </>
  );
};

export default Navigation;
