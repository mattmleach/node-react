import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {},
  toolBar: {
    height: "64px"
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="inherit" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <img
            src="\images\Symcor_Logo_Horiz_RGB_Gradient.png"
            alt=""
            height="60%"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
