import React from "react";
import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import axios from "axios";
import { Stack } from "@mui/system";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name",
  },
  {
    name: "email",
    label: "Email",
    id: "my-email",
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10,
  },
];

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }

    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "This field is required.";

    setErrors({
      ...temp,
    });
  };
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };
  const handleFormSubmit = async (e) => {
    if (formIsValid()) {
      axios({
        method: "POST",
        url: "http://localhost:5000/contactUs/send",
        data: {
          values,
        },
      }).then((response) => {
        console.log(response);
        if (response.request.status === "success") {
          alert("Your message is sent successfully!");
          this.resetForm();
        } else if (response.data.msg === "fail") {
          alert("Message failed to send.");
        }
      });
    }
  };
  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};

export default function ContactUs() {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();

  return (
    <Stack direction={["column", "row"]} sx={styles.container}>
      <Box sx={styles.instructions}>
        <Typography variant="h3" sx={styles.title}>
          Leave us a message
        </Typography>
        <Typography sx={styles.paragraph}>
          Torquatos nostros? quos tu tam crudelis fuisse, nihil oportere nimium
          nos causae confidere, sed animo etiam erga nos causae confidere, sed
          uti oratione perpetua malo quam ostendis sed quia dolor repellendus
          temporibus autem.
        </Typography>

        <Stack direction={["column", "row"]} sx={styles.infoContainer}>
          <div>
            <PlaceSharpIcon sx={styles.info} />
            <Typography>9094 Bay Meadows Street</Typography>
            <Typography>Conyers, GA 30012</Typography>
          </div>
          <div>
            <LocalPhoneSharpIcon sx={styles.info} />
            <Typography>+229-955-5388-336</Typography>
            <Typography>+229-955-5388-336</Typography>
          </div>
          <div>
            <EmailSharpIcon sx={styles.info} />
            <Typography>office@mail.com</Typography>
            <Typography>support@mail.com</Typography>
          </div>
        </Stack>
      </Box>
      <FormControl method="POST" onSubmit={handleFormSubmit} fullWidth>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <>
              <TextField
                sx={styles.fields}
                key={index}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                name={inputFieldValue.name}
                label={inputFieldValue.label}
                multiline={inputFieldValue.multiline ?? false}
                rows={inputFieldValue.rows ?? 1}
                autoComplete="none"
                {...(errors[inputFieldValue.name] && {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                })}
                required
              />
            </>
          );
        })}
        <Button sx={styles.button} type="submit" variant="contained" onClick={()=>handleFormSubmit()}>
          Send Message
        </Button>
      </FormControl>
    </Stack>
  );
}

const styles = {
  container: {
    textAlign: ["center", "start"],
    justifyContent: "space-between",
    gap: [4,15],
    py: 10,
    margin: "auto 10%"
  },
  title: {
    mb: 2,
  },

  paragraph: {
    mb: [3, 10],
  },

  fields: {
    mb: "20px",
  },
  infoContainer: {
    justifyContent: "space-between",
    alignItems: ["", "center"],
  },
  instructions: {
    mr: ["auto", 2],
  },
  info: {
    mb: 2,
  },
  button: {
    maxWidth: ["100%", "30%"],
    backgroundColor: "#0D7590",
  },
};
