import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import DrawerComponent from "./Drawer.jsx";
import LoginButton from "./LoginButton.jsx";

const theme = createTheme();
const useStyles = makeStyles(() => ({
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar position="sticky" sx={{ mb: 3 }}>
        <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="flutter dash icon"
            edge="start"
            size="large"
          >
            <FlutterDashIcon />
          </IconButton>
          <Typography variant="h4" className={classes.logo}>
            BIPONEE
          </Typography>

          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/shop" className={classes.link}>
                Shop
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
              <LoginButton className="link" />
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navigation;
