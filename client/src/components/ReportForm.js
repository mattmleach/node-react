import React from "react";
import { TextField, Button } from "@material-ui/core/";
import { Formik } from "formik";

class ReportForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <form onSubmit={handleSubmit}>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : ""}
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
              <Button type="submit" color="primary">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default ReportForm;
