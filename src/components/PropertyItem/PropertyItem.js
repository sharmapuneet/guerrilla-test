import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core"
import RoomOutlined from '@material-ui/icons/RoomOutlined';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingBottom: 60
  },
  image: {
    width: "100%",
  },
  bottom: {
    padding: "22px 20px",
    position: "absolute",
    bottom: 18,
    left: 32,
    [theme.breakpoints.down('md')]: {
      left: 12
    },
    [theme.breakpoints.only('sm')]: {
      width: 164
    },
    [theme.breakpoints.only('xs')]: {
      left: 26
    },
    width: 250
  },
  icon: {
    fontSize: 16,
    verticalAlign: "sub"
  }
}));

const PropertiesListing = ({ image, title, address }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} />
      <Card className={classes.bottom}>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="caption"><RoomOutlined className={classes.icon} /> {address}</Typography>
      </Card>
    </div>
  )
}

export default PropertiesListing;
