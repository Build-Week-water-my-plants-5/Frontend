import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

// props from Formik => values, errors, touched, status
// these are prefixed props sent from Formik into Signup because Signup is wrapped by withFormik HOC
// values => state of inputs & updates with change in input
// errors => any errors from Yup validation
// touched => when an input has be entered and moved away from by user
// status => when chagne from API has updated via setStatus
const Signup = ({ values, errors, touched, status }) => {
  // console.log("values", values);
  // console.log("errors", errors);
  // console.log("touched", touched);

  // local state that holds successful form submission data
  const [User, setUser] = useState([]);

  // listens for status changes to update User state
  useEffect(() => {
    console.log("status has changed!", status);
    // if status has content (an obj from API response) then render function setUser
    // use a spread to create a new array with all of User' previous values + the new obj from the API stored in status
    // could be setUser([...User, status]) but that fires a warning that we should watch User. We don't need to watch for User changes (this is the only place it could change)
    // change to User => [...User, status] to read in the current value of User, and then use it to create a new array
    status && setUser(User => [...User, status]);
  }, [status]);


//   RETURN -----------------------------------------------------------------------------------------

  return (
    <div className="">
        <h1>Sign up</h1>
      {/* Form automagically applies handleSubmit from withFormik options declared below*/}
      <Form>
        {/* can wrap Field with label to apply label. Need id on Field to create association*/}
        <label htmlFor="Sign">
                                           Username
          {/* name is the key within values (the current state of the form inputs) */}
          <Field
            id="username"
            type="text"
            name="username"
            placeholder="User"
          />
          {/* touched is if input has been visited, errors are captured from Yup validation. 
          If has been visited && errors exist for that input => render JSX to show errors*/}
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
        </label>
                     
        <label htmlFor="password">
                                            Password
          <Field id="password" type="text" name="password" placeholder="Pass" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        {/* For Fields that use input elements other thank <input /> use as to declare what HTML input to use for Field*/}
        <label htmlFor="repassword">
                                        Repeat Password
          <Field id="repassword" type="text" name="repassword" placeholder="Repeat Pass" />
          {touched.repassword && errors.repassword && (
            <p className="errors">{errors.repassword}</p>
          )}
        </label>
        <button type="Sign">Sign Up!</button>
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  // props from <Signup /> in app are in props param
  mapPropsToValues(props) {
    // set initial state of form to value from parent component OR the initial value (after || )
    return {
      username: props.username || "",
      password: props.password || "",
      repassword: props.repassword || "",
    };
  },

  // Declare shape and requirement of values object (form state )
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Create Username"),
    // passing a string in required makes a custom inline error msg
    password: Yup.string().required("Create Password"),
    repassword: Yup.string().required("Re-Enter Your Password")

  }),

  // passed through props (magically) to Form component in Formik
  // fires when button type=submit is fired
  // values = state of form, formikBag is second param
  // in FormikBag: setStatus (sends API response to Signup) & resetForm (clears form when called)
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        // sends a status update through props in Signup with value as res.data content
        setStatus(res.data);

        //clears form inputs, from FormikBag
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(Signup);
export default FormikUserForm;
