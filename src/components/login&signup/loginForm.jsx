import React, { useState } from "react";
import {
  Link as RouterLink,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { Form, FormikProvider, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLogin } from "../../hooks/useLogin";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useAuthContext } from "../../hooks/useAuthContext";
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

const LoginForm = ({ setAuth }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [submited, setSubmited] = useState(false);

  const { login, error, isLoading } = useLogin();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const response = await login(values.email, values.password);
      setSubmited(true);
      console.log(user?.role);

      // or do something else with the response data

      // check the role of the user and navigate to the appropriate route
    },
  });

  const SwitchRoute = () => {
    switch (user?.role) {
      case "admin":
        navigate("/admin");
        break;
      case "user":
        navigate("/");
        break;
      case "superadmin":
        navigate("/superadmin");
        break;
      default:
        navigate("/");
        break;
    }
  };
  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    handleChange,
  } = formik;

  return (
    <>
      {submited ? (
        SwitchRoute()
      ) : (
        <FormikProvider value={formik}>
          <Form autoComplete="off" onSubmit={handleSubmit} noValidate>
            <Box
              component={motion.div}
              animate={{
                transition: {
                  staggerChildren: 0.55,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                animate={animate}
              >
                <label htmlFor="email" style={{ fontWeight: "bold" }}>
                  Email:
                </label>

                <TextField
                  name="email"
                  onChange={handleChange}
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label="Email Address"
                  {...getFieldProps("email")}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />

                <label htmlFor="password" style={{ fontWeight: "bold" }}>
                  Password:
                </label>
                <TextField
                  name="password"
                  onChange={handleChange}
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  {...getFieldProps("password")}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <Icon icon="eva:eye-fill" />
                          ) : (
                            <Icon icon="eva:eye-off-fill" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={animate}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ my: 2 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...getFieldProps("remember")}
                        checked={values.remember}
                      />
                    }
                    label="Remember me"
                  />

                  <Link
                    component={RouterLink}
                    variant="subtitle2"
                    to="#"
                    underline="hover"
                  >
                    Forgot password?
                  </Link>
                </Stack>

                <LoadingButton
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                >
                  {isSubmitting ? "loading..." : "Sign in"}
                </LoadingButton>
              </Box>
            </Box>
          </Form>
        </FormikProvider>
      )}
    </>
  );
};

export default LoginForm;
