import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = () => ({
  root: {
    flexGrow: 1
  }
});

const Progress = ({ classes }) => (
  <CircularProgress
    className={classes.progress}
    color="primary"
    thickness={7}
  />
);

Progress.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Progress);
