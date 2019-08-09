import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { userActions } from "../actions";
import styled from "styled-components";

const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required."),
  password: Yup.string().required("Password is required.")
});

const LoginForm = styled.form`
  display: grid;
  grid-row-gap: 20px;
  padding: 40px 20px 20px 20px;
`;

const LoginPaper = styled(Paper)``;

const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

class Login extends React.Component {
  onSubmit = values => {
    const { email, password } = values;
    if (email && password) {
      this.props.login(email, password);
    }
  };

  render() {
    return (
      <LoginPage>
        <LoginPaper>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidation}
            onSubmit={this.onSubmit}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
              } = props;

              return (
                <LoginForm onSubmit={handleSubmit}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : ""
                    }
                  />
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password ? errors.password : ""
                    }
                  />
                  <Button
                    type="submit"
                    color="primary"
                    disabled={this.props.auth.loggingIn}
                  >
                    Submit
                  </Button>
                </LoginForm>
              );
            }}
          </Formik>
        </LoginPaper>
      </LoginPage>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.authentication };
};

export default connect(
  mapStateToProps,
  { login: userActions.login, logout: userActions.logout }
)(Login);
