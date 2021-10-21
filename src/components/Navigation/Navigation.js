import React from 'react';
import {  Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    linkItem: {
      color: "#1E3240",
      float: "left",
      paddingRight: 70,
      textDecoration: "none"
    },
    linkItemLast: {
      color: "#1E3240",
      float: "left",
      textDecoration: "none"
    },
}));

const Navigation= () =>{
  const classes= useStyles();

  return (
    <>
      <Link className={classes.linkItem} to="/"><Typography variant="body2">Home</Typography></Link>
      <Link className={classes.linkItem} to="/about"><Typography variant="body2">About</Typography></Link>
        <Link className={classes.linkItem} to="/projects"><Typography variant="body2">Projects</Typography></Link>
        <Link className={classes.linkItemLast} to="/contact"><Typography variant="body2">Contact</Typography></Link>
    </>
  );
}

export default Navigation;
