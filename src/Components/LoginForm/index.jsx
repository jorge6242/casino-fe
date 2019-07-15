import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from "redux-form";
import TextField from '@material-ui/core/TextField';
import "./index.sass";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
)

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, handleForm } = props;
  return (
    <Grid container spacing={0} className="login-form">
      <form onSubmit={handleSubmit(handleForm)}>
        <Grid item xs={12} className="login-form__field">
          <Field
            name="email"
            type="name"
            component={renderTextField}
            label="Email"
          />
        </Grid>
        <Grid item xs={12} className="login-form__field">
          <Field
            name="password"
            type="password"
            component={renderTextField}
            label="Password"
          />
        </Grid>
        <Grid item xs={12} className="login-form__field">
          <Button type="submit" disabled={submitting} variant="contained" color="primary" >
            Login
          </Button>
          <Button type="button" disabled={pristine || submitting} variant="contained" color="secondary" onClick={reset} >
            Clear Values
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

const CustomLoginForm = reduxForm({
  form: "loginForm",
  validate,
  enableReinitialize: true
})(LoginForm);

export default connect(null)(CustomLoginForm);
