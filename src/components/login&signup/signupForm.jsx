
import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import CountriesNumbers from "./phoneinput";

/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const SignupForm = ({ setAuth }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be a valid phone number")
      .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    grade: Yup.string().required("Grade is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      PhoneNumber: "",
      Subject: "",
      Grade: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      setTimeout(() => {
        setAuth(true);
        navigate("/", { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Stack direction="column">
              <label
                htmlFor="email"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                FirstName:
              </label>
              <TextField
                fullWidth
                label="First name"
                {...getFieldProps("firstName")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Stack>
            <Stack direction="column">
              <label
                htmlFor="email"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                LastName: &nbsp;
              </label>
              <TextField
                fullWidth
                label="Last name"
                {...getFieldProps("lastName")}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Stack>
          </Stack>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
         
         
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <Stack direction="column">
              <label
                htmlFor="email"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Email: &nbsp;
              </label>
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
            </Stack>
          </Stack>
{/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Stack direction="column">
              <label
                htmlFor="Password"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Password:
              </label>
              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                label="Password"
                {...getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Stack>
            <Stack direction="column">
              <label
                htmlFor="ConfirmPassword"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Confirm Password:
              </label>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Confirm password"
                {...getFieldProps("confirmPassword")}
                error={Boolean(
                  touched.ConfirmPassword && errors.ConfirmPassword
                )}
                helperText={touched.ConfirmPassword && errors.ConfirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon
                          icon={
                            showPassword ? "bi:eye-slash-fill" : "bi:eye-fill"
                          }
                          color="#6B7280"
                          width={24}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Stack>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Stack direction="column">
              <label
                htmlFor="PhoneNumber"
                style={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                Phone Number:
              </label>
              <CountriesNumbers/>
              {/* <TextField
                fullWidth
                label="Phone number"
                {...getFieldProps("phoneNumber")}
                error={Boolean(touched.PhoneNumber && errors.PhoneNumber)}
                helperText={touched.PhoneNumber && errors.PhoneNumber}
              /> */}
            </Stack>
          </Stack>

{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
       
<Stack
  component={motion.div}
  initial={{ opacity: 0, y: 60 }}
  animate={animate}
  direction="row"
  spacing={2}
>
  <Stack direction="column" flexGrow={1}>
    <label
      htmlFor="Subjects"
      style={{ fontWeight: "bold", marginBottom: "1rem" }}
    >
      Subjects:
    </label>
    <Select
      fullWidth
      variant="outlined"
      label="Subject"
      defaultValue="Subject"
      {...getFieldProps("Subject")}
      error={Boolean(touched.Subject && errors.Subject)}
      helperText={touched.Subject && errors.Subject}
      style={{ color: "black" }}
    >
      <MenuItem value="math">Math</MenuItem>
      <MenuItem value="english">English</MenuItem>
      <MenuItem value="science">Science</MenuItem>
    </Select>
  </Stack>

  <Stack direction="column" flexGrow={1}>
    {" "}
    <label
      htmlFor="Grades"
      style={{ fontWeight: "bold", marginBottom: "1rem" }}
    >
      Grades:
    </label>
    <Select
      fullWidth
      label="Grade"
      {...getFieldProps("grade")}
      error={Boolean(touched.Grade && errors.Grade)}
      helperText={touched.Grade && errors.Grade}
    >
      <MenuItem value="1">1st grade</MenuItem>
      <MenuItem value="2">2nd grade</MenuItem>
      <MenuItem value="3">3rd grade</MenuItem>
      <MenuItem value="4">4th grade</MenuItem>
      <MenuItem value="5">5th grade</MenuItem>
      <MenuItem value="6">6th grade</MenuItem>
      <MenuItem value="7">7th grade</MenuItem>
      <MenuItem value="8">8th grade</MenuItem>
      <MenuItem value="9">9th grade</MenuItem>
      <MenuItem value="10">10th grade</MenuItem>
      <MenuItem value="11">11th grade</MenuItem>
      <MenuItem value="12">12th grade</MenuItem>
    </Select>
  </Stack>
</Stack>


{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Sign up
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;