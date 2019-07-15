import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import snackBarStatus from "../../Actions/snackbarActions";

const styles1 = theme => ({
  success: {
    backgroundColor: "#26A65B"
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

function MySnackbarContent(props) {
  const {
    classes,
    className,
    message,
    onClose,
    type,
    variant,
    ...other
  } = props;
  const RenderIcon = type === "success" ? CheckCircleIcon : ErrorIcon;
  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <RenderIcon
            className={classNames(classes.icon, classes.iconVariant)}
          />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.instanceOf(Object).isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  root: {
    zIndex: "1500"
  },
  margin: {
    margin: theme.spacing.unit
  }
});

class SnackBar extends React.Component {
  handleClose = () => {
    this.props.snackBarStatus({
      payload: { enable: false }
    });
  };
  render() {
    const { enable, title, type, classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={enable}
          autoHideDuration={3000}
          onClose={this.handleClose}
          className={classes.root}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={type}
            message={title}
            type={type}
          />
        </Snackbar>
      </div>
    );
  }
}

SnackBar.propTypes = {
  enable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  snackBarStatus: PropTypes.func.isRequired
};

const mS = state => ({
  enable: state.snackBarReducer.enable,
  title: state.snackBarReducer.title,
  type: state.snackBarReducer.type
});

const mD = {
  snackBarStatus
};

export default connect(
  mS,
  mD
)(withStyles(styles2)(SnackBar));
