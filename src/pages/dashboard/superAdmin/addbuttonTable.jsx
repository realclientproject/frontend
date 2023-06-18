import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { DialogActions } from "@mui/material";
import axios from "axios";

const AddbuttonTable = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    role: "",
    password: "",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddClick = (e) => {
    // handle adding data
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5000/user/register", formData)
      .then((response) => {
        // Handle success response
        console.log(response);

        // >> RESET THE INPUTS
        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          role: "",
          password: "",
        });
        handleClose();
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("Email already taken, please use a different email.");
        } else {
          alert("Something went wrong. Please try to change the email.");
        }
      });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<Add />}
        sx={{
          m: 2,
          backgroundColor: "#0D7590",
          ":hover": {
            boxShadow: "0px 0px 0px 1px #0D7590",
            backgroundColor: "white",
            color: "#0D7590",
          },
        }}
      >
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the form below to add new Admin.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="first_name"
            label="First Name"
            type="text"
            fullWidth
            required
            value={formData.first_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="last_name"
            label="Last Name"
            type="text"
            fullWidth
            required
            value={formData.last_name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            type="text"
            fullWidth
            required
            value={formData.phone}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="role"
            label="Role"
            type="text"
            fullWidth
            required
            value={formData.role}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="text"
            fullWidth
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default AddbuttonTable;
