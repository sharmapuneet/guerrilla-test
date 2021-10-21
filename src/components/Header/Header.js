import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button, Grid, Hidden, useMediaQuery } from "@material-ui/core"
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../../assets/logo.png";
import backgroundImage from "../../assets/backgroundImage.png";
import Navigation from "../Navigation/Navigation";


const useStyles = makeStyles((theme) => ({
  header: {
    background: "#AFD4E2",
    height: 800,
    [theme.breakpoints.down('lg')]: {
      padding: "16px"
    }
  },
  headerMain: {
    maxWidth: 1110,
    margin: "0 auto"
  },
  headerTop: {
    paddingTop: "55.4px"
  },
  headerMiddle: {
    paddingTop: 104,
    maxWidth: 635,
    color: "#1E3240"
  },
  headerBottom: {
    paddingTop: 32
  },
  buttonFirst: {
    backgroundColor: "#1E3240",
    color: "#ffffff",
    padding: `18px 24px`,
    marginRight: 32,
    '&:hover': {
      backgroundColor: "#1E3240",
    },
    '&:active': {
      backgroundColor: "#1E3240",
    },
    '&:focus': {
      backgroundColor: "#1E3240",
    },
  },
  buttonSecond: {
    color: "#1E3240",
    padding: `18px 24px`,
    '&:hover': {
      backgroundColor: "transparent",
    },
    '&:active': {
      backgroundColor: "transparent",
    },
    '&:focus': {
      backgroundColor: "transparent",
    },
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.header} style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "bottom", backgroundSize: "cover" }}>
      <div className={classes.headerMain}>
        <Grid container spacing={2} className={classes.headerTop} justifyContent="space-between">
          <Grid item><img src={logo}></img></Grid>
          <Hidden xsDown>
            <Grid item>
              <Router>
                <Navigation />
              </Router>
            </Grid>
          </Hidden>
        </Grid>
        <div className={classes.headerMiddle}>
          <Typography variant={useMediaQuery(theme.breakpoints.down("xs")) ? "h2" : "h1"}>
            A home is built with love and dreams
          </Typography>
          <Typography variant="subtitle1">
            Real estate farm that makes your dreams true
          </Typography>
        </div>
        <div className={classes.headerBottom}>
          <Button variant="contained" className={classes.buttonFirst}>Our projects</Button>
          <Button variant="outlined" className={classes.buttonSecond}>Contact us</Button>
        </div>
      </div>
    </div>
  )
}

export default Header;
