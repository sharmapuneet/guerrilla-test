import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import leftBg from "../../assets/leftbg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 150
  },
  heading: {
    color: "#1E3240",
    paddingTop: 42
  },
  subText: {
    color: "#BDBDBD",
    paddingTop: 40
  },
  image: {
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  }
}));

const ContentBottom = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={7}>
          <img src={leftBg} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h3" className={classes.heading}>Award winning real estate company in Dubai</Typography>
          <Typography variant="subtitle1" className={classes.subText}>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContentBottom;
