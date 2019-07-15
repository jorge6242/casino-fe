import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./index.sass";
import LoginForm from "../../Components/LoginForm";
import { login } from "../../Actions/loginActions";
import Progress from "../../Components/Progress";

class Login extends Component {
  state = {
    show: false
  };
  handleForm = form => {
    const { history } = this.props;
    this.setState({ show: true });
    this.props.login(form).then(res => {
      if (res.status === 200) {
        this.setState({ show: false });
        history.push("/dashboard");
      } else {
        this.setState({ show: false });
      }
    });
  };

  render() {
    const { show } = this.state;
    return (
      <Grid container spacing={0} className="login-container">
        <Grid item xs={12} className="login-container__title">
          Login
        </Grid>
        <Grid item xs={12} className="login-container__form">
          <LoginForm handleForm={this.handleForm} />
        </Grid>
        <Grid item xs={12} className="login-container__form">
          {show && <Progress />}
        </Grid>
        <Grid item xs={3} className="login-container__info">
          <Paper>
            <Typography>
              User: user@test.com
            </Typography>
            <Typography>
              Password: 123456
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const mD = {
  login
};

export default withRouter(
  connect(
    null,
    mD
  )(Login)
);
