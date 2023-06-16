import { useFormik } from "formik";
import React, { useState } from "react";
import { Marginer } from "./signup/marginer";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  SubmitButton,
  FormError,
} from "./signup/signup";

import * as Yup from "yup";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name required"),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name required"),
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be a valid phone number")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
  grade: Yup.string().required("Grade is required"),
});

export default function SignupForm(props) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [fetching, setfeching] = useState(true);
  const Navigate = useNavigate();
  const onSubmit = async (values) => {
    const { ...data } = values;

    const response = await axios
      .post("http://localhost:5000/user/register", data)
      .catch((err) => {
        console.log("error in form");
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      console.log("response is", response);
      setError(null);
      setSuccess(response.data.message);
      setfeching(false);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      subject: "english",
      grade: "1",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  const { isSubmitting } = formik;

  console.log("Error", error);

  return (
    <>
      {success !== null ? (
        Navigate("/login")
      ) : (
        <BoxContainer>
          {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
          {!success && <FormError>{error ? error : ""}</FormError>}
          <FormContainer onSubmit={formik.handleSubmit}>
            <FieldContainer>
              <Input
                name="first_name"
                placeholder="first Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <FieldError>
                {formik.touched.first_name && formik.errors.first_name
                  ? formik.errors.first_name
                  : ""}
              </FieldError>
            </FieldContainer>
            <FieldContainer>
              <Input
                name="last_name"
                placeholder="last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <FieldError>
                {formik.touched.last_name && formik.errors.last_name
                  ? formik.errors.last_name
                  : ""}
              </FieldError>
            </FieldContainer>

            <FieldContainer>
              <Input
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FieldError>
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </FieldError>
            </FieldContainer>
            <FieldContainer>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FieldError>
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </FieldError>
            </FieldContainer>
            <FieldContainer>
              <Input
                name="phone"
                placeholder="phone"
                type="number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FieldError>
                {formik.touched.phone && formik.errors.phone
                  ? formik.errors.phone
                  : ""}
              </FieldError>
            </FieldContainer>
            <FieldContainer>
              <Input
                name="grade"
                as="select"
                value={formik.values.grade}
                defaultValue="1"
                onChange={formik.handleChange}
              >
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </Input>
              <FieldError>
                {formik.touched.grade && formik.errors.grade
                  ? formik.errors.grade
                  : ""}
              </FieldError>
            </FieldContainer>

            <FieldContainer>
              <Input
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                as="select"
              >
                <option value="english">english</option>
                <option value="math">math</option>
                <option value="physic">physic</option>
                <option value="french">french</option>
              </Input>
              <FieldError>
                {formik.touched.subject && formik.errors.subject
                  ? formik.errors.subject
                  : ""}
              </FieldError>
            </FieldContainer>

            <Marginer direction="vertical" margin="1em" />
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {isSubmitting ? "loading..." : "Sign in"}
            </LoadingButton>
          </FormContainer>
          <Marginer direction="vertical" margin={5} />
        </BoxContainer>
      )}
    </>
  );
}
