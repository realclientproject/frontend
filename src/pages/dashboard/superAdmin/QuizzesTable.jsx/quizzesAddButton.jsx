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
import { Input, InputAdornment, IconButton } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const AddresourcesButton = () => {
  const [open, setOpen] = useState(false);
  const [showmedia, setShowmedia] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "quiz",
    description: "",
    price: "",
    count: "",
    media: "",
  });

  const handleClickShowmedia = () => {
    setShowmedia(!showmedia);
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
      .post("http://localhost:8000/resource", formData)
      .then((response) => {
        // Handle success response
        console.log(response);

        // >> RESET THE INPUTS
        setFormData({
          name: "",
          type: "quiz",
          description: "",
          price: "",
          count: "",
          media: "",
        });
        handleClose();
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("price already taken, please use a different price.");
        } else {
          alert("Something went wrong. Please try to change the price.");
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
            name="name"
            label="Name"
            type="text"
            fullWidth
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="type"
            label="Type"
            type="text"
            fullWidth
            required
            disabled
            value={formData.type}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="description "
            type="text"
            fullWidth
            required
            value={formData.description}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="price"
            type="text"
            fullWidth
            required
            value={formData.price}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="count"
            label="count"
            type="text"
            fullWidth
            required
            value={formData.count}
            onChange={handleInputChange}
          />
         <Input
  margin="dense"
  name="media"
  type="file"
  fullWidth
  required
  inputProps={{ accept: "image/*, .pdf, .doc, .docx" }}
  onChange={handleClickShowmedia}
  endAdornment={
    <InputAdornment position="end">
      <IconButton>
        <CloudUpload />
      </IconButton>
    </InputAdornment>
  }
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
export default AddresourcesButton;